import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActeInterface} from '../dataInterfaces/actes';

@Injectable({
  providedIn: 'root'
})
export class ActeMedicalService {

  private domParser: DOMParser = new DOMParser();
  private doc: Document;
  public actesMedical: ActeInterface;

  constructor(private http: HttpClient) {
  }

  //fonction pull des données du document XML actes
  async getDataActe(url: string): Promise<ActeInterface> {
    return new Promise<ActeInterface>( (resolve, reject) => {
      this.http.get(url, {responseType: 'text'}).toPromise().then(
        res => {
          this.doc = this.domParser.parseFromString(res, 'text/xml');

          //default actes
          this.actesMedical = {
            types : [],
            actes : []
          };

          // 1 - tableau des type
          const typesXML = Array.from(this.doc.querySelectorAll('types > type'));
          this.actesMedical.types = typesXML.map(I => ({
            id : I.getAttribute("id"),
            nom : I.textContent
          }));

          // 1 - tableau des type
          const actesXML = Array.from(this.doc.querySelectorAll('actes > acte'));
          this.actesMedical.actes = actesXML.map(I => ({            
            id : I.getAttribute("id"),
            coef :I.getAttribute("coef"),
            cle : I.getAttribute("clé"),
            type : I.getAttribute("type"),
            nom : I.textContent
          }));

          resolve(this.actesMedical);
        }, rej => {
          reject(rej);


      });
    });
  }

  //fonction pour obtenir les données de l'acte dont l'id est donnée en paramètre
  public getActesbyId(id : string ){
    const actes = this.actesMedical.actes.find(element => {
      return element.id === id;
    }
    );
    return actes;
  }

  //fonction pour obtenir les données du type dont l'id est donnée en paramètre
  public getTypesbyId(id : string){
    const types = this.actesMedical.types.find(element => {
      return element.id === id;
    }
    );
    return types;
  }

  //fonction pour obtenir le coût du soins
  public facture(coef : string, cle : string) {
    let total = 0.0;
    switch(cle){
      case "AMI": total = 3.15 * (+coef) ;
                  break; 
      case "AIS": total = 2.65 * (+coef) ;
                  break;
      case "DI" : total = 10.0 * (+coef) ;
                  break;
      default : break;
    }
    return total;
  }


}
