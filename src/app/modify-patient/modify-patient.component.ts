import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
import {PatientAffectDialogComponent} from "../patient-affect-dialog/patient-affect-dialog.component";

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
    @Input() patient;
    @Input() infirmiers: InfirmierInterface[];
    @Output() affectionEmitter: EventEmitter<AffectationPatientDialogData> = new EventEmitter();
    @Output() desAffectionEmitter: EventEmitter<PatientInterface> = new EventEmitter();

    actesMedical: ActeInterface;

    constructor(private cabinetService: CabinetMedicalService, private authService: AuthService,
                private actesService: ActeMedicalService, private dialog: MatDialog, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    const person = Log.secretaire;
    this.authService.verifLog(person);

    this.actesService.getDataActe('/data/actes.xml').then(actes => {
      this.actesMedical = actes;      
    }); 

  }

    openAffectationDialog(): void {
        const dialogRef = this.dialog.open(PatientAffectDialogComponent, {
            width: '250px',
            data: {patient: this.patient, infirmiers: this.infirmiers}
        });

        dialogRef.afterClosed().subscribe(infirmier => {
            if (infirmier !== undefined) {
                this.cabinetService.affectation(this.patient, infirmier.id).then(p => {
                    if (p !== null) {
                        this.affectionEmitter.emit({patient: this.patient, infirmiers: this.infirmiers});
                        this.snackBar.open(`${this.patient.prenom} ${this.patient.nom} a bien été affecté à 
                        ${infirmier.prenom} ${infirmier.nom}`, 'Ok', ({
                            duration: 5000,
                        }));
                    } else {
                        this.snackBar.open(`Echec de l'affectation`, 'Ok', ({
                            duration: 5000,
                        }));
                    }
                });

            }
        });
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
