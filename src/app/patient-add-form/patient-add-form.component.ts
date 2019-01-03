import {Component, Inject, NgModule, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MAT_DATE_LOCALE, MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {AffectationPatientDialogData} from "../modify-patient/modify-patient.component";
import {sexeEnum} from "../dataInterfaces/sexe";

@NgModule({
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
    ],
})

@Component({
    selector: 'app-patientaddform',
    templateUrl: './patient-add-form.component.html',
    styleUrls: ['./patient-add-form.component.css']
})
export class PatientAddFormComponent implements OnInit {
    @ViewChild('formulaire') formulaire: NgForm;
    sexe: string;

    // pour eviter de choisir des dates de naissances dans le futur
    maxDate = new Date();
    titreDialog: string;

    constructor(public snackBar: MatSnackBar,
                public dialogRef: MatDialogRef<PatientAddFormComponent>,
                @Inject(MAT_DIALOG_DATA) public data: AffectationPatientDialogData) {
        if (data.patient.sexe === sexeEnum.F) {
            this.data.patient.sexe = 'F';
        } else {
            this.data.patient.sexe = 'M';
        }
    }

    ngOnInit() {
        if (this.data.ajout) {
            this.titreDialog = "Ajouter un patient";
        } else {
            this.titreDialog = "Modifier un patient";
        }
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
