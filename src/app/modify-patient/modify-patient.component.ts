import {Component, OnInit} from '@angular/core';
import {CabinetMedicalService} from '../services/cabinet-medical.service';
import {PatientInterface} from '../dataInterfaces/patient';
import {ActeInterface} from '../dataInterfaces/actes';
import {AuthService} from '../services/auth.service';
import {ActeMedicalService} from '../services/acte-medical.service';
import {Log} from '../dataInterfaces/Log';
import {sexeEnum} from "../dataInterfaces/sexe";
import {MatDialog, MatSnackBar} from "@angular/material";
import {PatientAddFormComponent} from "../patient-add-form/patient-add-form.component";
import {InfirmierInterface} from "../dataInterfaces/infirmier";

export interface AffectationPatientDialogData {
    patient: PatientInterface;
    infirmiers: InfirmierInterface[];
}

@Component({
  selector: 'app-modify-patient',
  templateUrl: './modify-patient.component.html',
  styleUrls: ['./modify-patient.component.css']
})
export class ModifyPatientComponent implements OnInit {
  ajouter = false;
  affecter = false;
  supprimer = false;
    patients: PatientInterface[];

    actesMedical: ActeInterface;

    constructor(private cabinetService: CabinetMedicalService, private authService: AuthService,
                private actesService: ActeMedicalService, private dialog: MatDialog, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    const person = Log.secretaire;
    this.authService.verifLog(person);

    this.cabinetService.getData('/data/cabinetInfirmier.xml').then(cabinet => {
      this.patients = cabinet.patientsNonAffectes;
      /*cabinet.infirmiers.forEach( (element)=> {
        //this.patients.push(element.patients);
      });*/
    });

    this.actesService.getDataActe('/data/actes.xml').then(actes => {
      this.actesMedical = actes;      
    }); 

  }

    P() {
        this.ajouter = true;
  }

    ajoutP(): void {
        const dialogRef = this.dialog.open(PatientAddFormComponent, {
            width: '750px',
            data: {patient: undefined, infirmiers: undefined}
        });

        dialogRef.afterClosed().subscribe(patient => {
            if (patient !== undefined) {
                if (patient.sexe === 'M') {
                    patient.sexe = sexeEnum.M;
                } else {
                    patient.sexe = sexeEnum.F;
                }
                this.cabinetService.addPatient(patient).then((p) => {
                    if (patient !== null) { // la requete a abouti code de retour 200 ok
                        this.snackBar.open(`${p.prenom} ${p.nom} a bien été ajouté`, 'Ok', ({
                            duration: 3000,
                        }));
                    } else { // la requete n'a pas abouti code de retour 400 bad request
                        this.snackBar.open(`Oups! Il y a eu un problème lors de l'ajout du patient`, 'Ok', ({
                            duration: 3000,
                        }));
                    }
                });
            }
        });
    }
}
