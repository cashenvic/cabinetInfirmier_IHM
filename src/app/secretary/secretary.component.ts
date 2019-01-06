import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';

import {CabinetInterface} from '../dataInterfaces/cabinet';
import {Log} from '../dataInterfaces/Log';
import {AuthService} from '../services/auth.service';
import {CabinetMedicalService} from "../services/cabinet-medical.service";
import {PatientInterface} from "../dataInterfaces/patient";
import {PatientAddFormComponent} from "../patient-add-form/patient-add-form.component";
import {MatDialog, MatSnackBar} from "@angular/material";
import {InfirmierInterface} from "../dataInterfaces/infirmier";

@Component({
  selector: 'app-secretary',
  templateUrl: './secretary.component.html',
  styleUrls: ['./secretary.component.css']
})

export class SecretaryComponent implements OnInit {
    cabinetInt: CabinetInterface;
    infirmier = true;
    patient = false;
    patients: PatientInterface[];
    infirmiers: InfirmierInterface[];
    query: string = '';
    searchPlaceholder = "Commencez à taper pour rechercher";

    constructor( private authService: AuthService, private cabinetService: CabinetMedicalService,
                private dialog: MatDialog, private snackBar: MatSnackBar, public datepipe: DatePipe,) {
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
        this.searchPlaceholder = "Commencez à taper pour rechercher les infirmiers";
    }

    onPatient() {
        this.patient = true;
        this.infirmier = false;
        this.searchPlaceholder = "Commencez à taper pour rechercher les patients";
    }

    //fonction d'ajout patient avec message correponsant
    ajoutP(): void {
        let NewPatient: PatientInterface = {
            prenom: '',
            nom: '',
            sexe: null,
            naissance: '',
            numeroSecuriteSociale: '',
            adresse: {
                ville: '',
                codePostal: null,
                rue: '',
                numero: '',
                etage: '',
            },
            visite: {
                intervenant: '',
                date: '',
                actes: [],
            }
        };

        const dialogRef = this.dialog.open(PatientAddFormComponent, {
            width: '750px',
            data: {ajout: true, patient: NewPatient, infirmiers: undefined}
        });

        dialogRef.afterClosed().subscribe(patient => {
            if (patient !== undefined) {
                patient.naissance = this.datepipe.transform(patient.naissance, 'yyyy-MM-dd'),
                this.cabinetService.addPatient(patient).then((p) => {
                    if (patient !== null) { // la requete a abouti code de retour 200 ok
                        this.snackBar.open(`${p.prenom} ${p.nom} a bien été ajouté`, 'Ok', ({
                            duration: 3000,
                        }));
                        this.ngOnInit();
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
