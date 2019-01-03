import {Component, OnInit} from '@angular/core';
import {CabinetInterface} from '../dataInterfaces/cabinet';
import {Log} from '../dataInterfaces/Log';
import {AuthService} from '../services/auth.service';
import {CabinetMedicalService} from "../services/cabinet-medical.service";
import {PatientInterface} from "../dataInterfaces/patient";
import {PatientAddFormComponent} from "../patient-add-form/patient-add-form.component";
import {sexeEnum} from "../dataInterfaces/sexe";
import {MatDialog, MatSnackBar} from "@angular/material";
import {InfirmierInterface} from "../dataInterfaces/infirmier";

@Component({
  selector: 'app-secretary',
  templateUrl: './secretary.component.html',
  styleUrls: ['./secretary.component.css']
})

export class SecretaryComponent implements OnInit {
    cabinetInt: CabinetInterface;
    infirmier = false;
    patient = false;
    patients: PatientInterface[];
    infirmiers: InfirmierInterface[];

    constructor(private authService: AuthService, private cabinetService: CabinetMedicalService,
                private dialog: MatDialog, private snackBar: MatSnackBar) {
    }

    ngOnInit() {
        //vérification de l'accès à la page
        const person = Log.secretaire;
        this.authService.verifLog(person);
        this.patients = [];
        this.infirmiers = [];

        this.cabinetService.getData('/data/cabinetInfirmier.xml').then(cabinet => {
            this.patients = cabinet.patientsNonAffectes;
            this.infirmiers = cabinet.infirmiers;
        });

    }

    onInfirmier() {
        this.infirmier = true;
        this.patient = false;
    }

    onPatient() {
        this.patient = true;
        this.infirmier = false;
    }

    //fonction d'ajout patient avec message correponsant
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
