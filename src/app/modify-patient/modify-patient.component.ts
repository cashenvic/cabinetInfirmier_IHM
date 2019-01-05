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
import {PatientAddFormComponent} from "../patient-add-form/patient-add-form.component";
import {CoutSoinsComponent, soinInterface} from "../cout-soins/cout-soins.component";

export interface AffectationPatientDialogData {
    ajout: boolean;
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
    showDelay = 400;
    @Input() patient: PatientInterface;
    @Input() infirmiers: InfirmierInterface[];
    @Input() affected: boolean;
    @Input() inInfirmier: boolean;
    @Input() infirmierCo: boolean;
    @Output() affectionEmitter: EventEmitter<AffectationPatientDialogData> = new EventEmitter();
    @Output() desAffectionEmitter: EventEmitter<PatientInterface> = new EventEmitter();
    affecterText: string;
    sexePatient: string;

    actesMedical: ActeInterface;

    tooltipAffecterPatient: string;

    //variables soins
    acteSoin: Array<string>;
    total = 0.0;

    dataActePatient: Array<soinInterface> = [];
    displayedColumns: string[] = ['acteId', 'type', 'libelle', 'cout'];

    //fin variables soins

    constructor(private cabinetService: CabinetMedicalService, private authService: AuthService,
                private actesService: ActeMedicalService, private dialog: MatDialog, private snackBar: MatSnackBar) {

        this.actesMedical =  this.actesService.actesMedical;
    }

    ngOnInit() {
        if (this.affected) {
            this.affecterText = "Réaffecter";
            this.tooltipAffecterPatient = "Réaffecter à un autre infirmier";
        } else {
            this.tooltipAffecterPatient = "Affecter à un infirmier";
            this.affecterText = "Affecter";
        }
        
        if (this.patient.sexe === sexeEnum.F) {
            this.sexePatient = 'Féminin';
        } else {
            this.sexePatient = 'Masculin';
        }
    }

    openFacture() {
        this.acteSoin = this.patient.visite.actes;
        this.total = 0.0;
        this.dataActePatient = [];

        this.acteSoin.forEach(element => {
            let unSoin: soinInterface = {
                id: "",
                type: "",
                libelle: "",
                cout: 0.0,
            };
            unSoin.id = this.actesService.getActesbyId(element).id;
            unSoin.type = this.actesService.getActesbyId(element).type;
            unSoin.libelle = this.actesService.getActesbyId(element).nom;

            let coef = this.actesService.getActesbyId(element).coef;
            let cle = this.actesService.getActesbyId(element).cle;
            let cout = this.actesService.facture(coef, cle);
            unSoin.cout = cout;

            this.total += cout;

            this.dataActePatient.push(unSoin);
        });
        const dialogRef = this.dialog.open(CoutSoinsComponent, {
            width: '750px',
            data: {actes: this.dataActePatient, patient: this.patient, total: this.total}
        });

        dialogRef.afterClosed().subscribe(patient => {
            // what ever we want to do with the "facture" either "imprimer" or something else
        });
    }

    modifierPatient() {
        let modPatient = Object.assign({}, this.patient);

        const dialogRef = this.dialog.open(PatientAddFormComponent, {
            width: '750px',
            data: {ajout: false, patient: modPatient, infirmiers: undefined}
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
                        this.snackBar.open(`Le patient a bien été modifié`, 'Ok', ({
                            duration: 3000,
                        }));
                    } else { // la requete n'a pas abouti code de retour 400 bad request
                        this.snackBar.open(`Oups! Il y a eu un problème lors de la modofication du patient`, 'Ok', ({
                            duration: 3000,
                        }));
                    }
                });
            }
        });
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
                        this.affectionEmitter.emit({ajout: false, patient: this.patient, infirmiers: this.infirmiers});
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
