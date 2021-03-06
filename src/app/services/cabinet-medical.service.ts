import {HttpClient, HttpResponse} from '@angular/common/http';

import {Adresse} from '../dataInterfaces/adresse';
import {sexeEnum} from '../dataInterfaces/sexe';
import {InfirmierInterface} from '../dataInterfaces/infirmier';
import {CabinetInterface} from '../dataInterfaces/cabinet';
import {PatientInterface} from '../dataInterfaces/patient';
import {VisiteInterface} from '../dataInterfaces/visite';

import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CabinetMedicalService {

  private domParser: DOMParser = new DOMParser();
  private doc: Document;
  public cabinet: CabinetInterface;

  constructor( private http: HttpClient) {
  }

  //fonction pull des données du document XML cabinetInfirmier
  async getData(url: string): Promise<CabinetInterface> {
    return new Promise<CabinetInterface>(((resolve, reject) => {
      this.http.get(url, {responseType: 'text'}).toPromise().then(
        res => {
          this.doc = this.domParser.parseFromString(res, 'text/xml');

          //default cabinet
          this.cabinet = {
            nom: this.doc.querySelector( "nom" ).textContent,                         
            adresse: this.getAdressFrom( this.doc.querySelector( "cabinet" ) ), 
            infirmiers: [],
            patientsNonAffectes: []
          };

          // 1 - tableau des infirmiers
          const infirmiersXML = Array.from(this.doc.querySelectorAll('infirmiers > infirmier'));
          this.cabinet.infirmiers = infirmiersXML.map(I => ({
            id      : I.getAttribute("id"),
            prenom  : I.querySelector("prénom").textContent,
            nom     : I.querySelector("nom"   ).textContent,
            photo   : I.querySelector("photo" ).textContent,
            adresse : this.getAdressFrom(I),
            patients: []
          }));

          // 2 tableau des patients
          const patientsXML = Array.from(this.doc.querySelectorAll('patients > patient'));
          const patients: PatientInterface[] = patientsXML.map(P => ({
              prenom: P.querySelector('prénom').textContent,
              nom: P.querySelector('nom').textContent,
              sexe: (P.querySelector('sexe').textContent === 'M') ? sexeEnum.M : sexeEnum.F,
              naissance : P.querySelector('naissance').textContent,
              numeroSecuriteSociale: P.querySelector('numéro').textContent,
              adresse: this.getAdressFrom(P),
              visite : this.getVisiteFrom(P),
          }));

          // 3 Tableau des affectations à faire.
          const affectations = patientsXML.map((P, i) => {
            const visiteXML = P.querySelector('visite[intervenant]');
            let infirmier: InfirmierInterface = null;
            if (visiteXML !== null && visiteXML.getAttribute('intervenant') !== '') {
                infirmier = this.cabinet.infirmiers.find(I => I.id === visiteXML.getAttribute('intervenant'));
            }
            return {patient: patients[i], infirmier: infirmier};
          });

          // 4 Realiser les affectations
          affectations.forEach(({patient: P, infirmier: I}) => {
            if (I !== null) {
                I.patients.push(P);
            } else {
                this.cabinet.patientsNonAffectes.push(P);
            }
          });
          this.cabinet.patientsNonAffectes.map(p => {
              //console.log('le patient non affecte: ' + p.nom);
          });
          resolve(this.cabinet);
        }, rej => {
          reject(rej);
      }     
        );
        }));
    }

    //fonction ajout patient + post des données dans le document XML
    public async addPatient(patient: PatientInterface): Promise<PatientInterface> {
    const res = await this.http.post('/addPatient', {
        patientName: patient.nom,
        patientForname: patient.prenom,
        patientNumber: patient.numeroSecuriteSociale,
        patientSex: patient.sexe === sexeEnum.M ? 'M' : 'F',
        patientBirthday: patient.naissance,
        patientFloor: patient.adresse.etage,
        patientStreetNumber: patient.adresse.numero,
        patientStreet: patient.adresse.rue,
        patientPostalCode: patient.adresse.codePostal,
        patientCity: patient.adresse.ville
    }, {observe: 'response'}).toPromise<HttpResponse<any>>();

    //console.log('Add patient renvoie', res);
    if (res.status === 200) {
        // OK on peut ajouter en local
        this.cabinet.patientsNonAffectes.push(patient);
        return patient;
    }
        return null;
    }

    //fonction pour obtenir les données du l'infirmier dont l'id est donnée en paramètre
    public getInfirmierById(id: string) {
        const infirmier = this.cabinet.infirmiers.find((s) => {
            return s.id === id;
        });
        return infirmier;
    }

    //fonction pour affecter le patient à l'infirmier dont l'id est passé en paramètre
    public async affectation(patient: PatientInterface, infirmierId: string): Promise<PatientInterface> {
        const res = await this.http.post('/affectation', {
            infirmier: infirmierId,
            patient: patient.numeroSecuriteSociale
        }, {observe: 'response'}).toPromise<HttpResponse<any>>();

        if (res.status === 200) {
            return patient;
        }
        return null;
    }

     //fonction pour desaffecter le patient à son infirmier 
    public async desAffectation(patient: PatientInterface): Promise<PatientInterface> {
        const res = await this.http.post('/affectation', {
            infirmier: 'none',
            patient: patient.numeroSecuriteSociale
        }, {observe: 'response'}).toPromise<HttpResponse<any>>();

        if (res.status === 200) {
            return patient;
        }
        return null;
    }

     //fonction pour obtenir les données de l'adresse
    private getAdressFrom(root: Element): Adresse {
        let node: Element;
        return {
            ville: (node = root.querySelector("adresse > ville")) ? node.textContent : "",
            codePostal: (node = root.querySelector("adresse > codePostal")) ? parseInt(node.textContent, 10) : 0,
            rue: (node = root.querySelector("adresse > rue")) ? node.textContent : "",
            numero: (node = root.querySelector("adresse > numéro")) ? node.textContent : "",
            etage: (node = root.querySelector("adresse > étage")) ? node.textContent : "",
        };
    }

     //fonction pour obtenir les données des visites
    private getVisiteFrom(root: Element): VisiteInterface {
        let actesId: Array<string> = [];
        root.querySelectorAll("acte").forEach((elt) => {
            actesId.push(elt.getAttribute("id"));
        });
        return {
            intervenant: root.querySelector("visite").getAttribute("intervenant"),
            date: root.querySelector("visite").getAttribute("date"),
            actes: actesId
        };
    }
 
}
