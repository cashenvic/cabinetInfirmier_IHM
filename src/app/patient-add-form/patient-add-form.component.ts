import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {PatientInterface} from '../dataInterfaces/patient';
import {NgForm} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {AffectationPatientDialogData} from "../modify-patient/modify-patient.component";


@Component({
    selector: 'app-patientaddform',
    templateUrl: './patient-add-form.component.html',
    styleUrls: ['./patient-add-form.component.css']
})
export class PatientAddFormComponent implements OnInit {
    @ViewChild('formulaire') formulaire: NgForm;
    sexe: string;

    patient: PatientInterface = {
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

    constructor(public snackBar: MatSnackBar,
                public dialogRef: MatDialogRef<PatientAddFormComponent>,
                @Inject(MAT_DIALOG_DATA) public data: AffectationPatientDialogData) {
    }

    ngOnInit() {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
