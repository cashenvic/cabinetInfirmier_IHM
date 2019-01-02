import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CabinetMedicalService} from '../services/cabinet-medical.service';
import {PatientInterface} from '../dataInterfaces/patient';
import {ActeInterface} from '../dataInterfaces/actes';
import {AuthService} from '../services/auth.service';
import {ActeMedicalService} from '../services/acte-medical.service';
import {Log} from '../dataInterfaces/Log';
import {MatDialog, MatSnackBar} from "@angular/material";
import {InfirmierInterface} from "../dataInterfaces/infirmier";
import {PatientAffectDialogComponent} from "../patient-affect-dialog/patient-affect-dialog.component";
import {sexeEnum} from "../dataInterfaces/sexe";

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
    @Input() patient: PatientInterface;
    @Input() infirmiers: InfirmierInterface[];
    @Input() affected: boolean;
    @Output() affectionEmitter: EventEmitter<AffectationPatientDialogData> = new EventEmitter();
    @Output() desAffectionEmitter: EventEmitter<PatientInterface> = new EventEmitter();
    affecterText: string;
    sexePatient: string;

    actesMedical: ActeInterface;

    constructor(private cabinetService: CabinetMedicalService, private authService: AuthService,
                private actesService: ActeMedicalService, private dialog: MatDialog, private snackBar: MatSnackBar) {

        //pull les données actes.xml à partir du serveur            
        this.actesService.getDataActe('/data/actes.xml').then(actes => {
            this.actesMedical = actes;
        });
    }

    ngOnInit() {
        //vérification de l'accès au page
        const person = Log.secretaire;
        this.authService.verifLog(person);

        if (this.affected) {
            this.affecterText = "Réaffecter";
        } else {
            this.affecterText = "Affecter";
        }
        
        if (this.patient.sexe === sexeEnum.F) {
            this.sexePatient = 'Féminin';
        } else {
            this.sexePatient = 'Masculin';
        }
    }

    patientActions() {
        //call either affect or desaffect
        if (this.affected) {

        } else {
            this.openAffectationDialog();
        }
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

    desaffect() {
        const p = this.cabinetService.desAffectation(this.patient);
        if (p !== null) {
            this.desAffectionEmitter.emit(this.patient);
            this.snackBar.open(`${this.patient.prenom} ${this.patient.nom} a bien été desaffecté  de tout infirmier`, 'Ok', ({
                duration: 5000,
            }));
        } else {
            this.snackBar.open(`Echec de la desaffectation`, 'Ok', ({
                duration: 5000,
            }));
        }
    }
}
