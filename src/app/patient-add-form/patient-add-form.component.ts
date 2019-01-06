import {Component, Inject, NgModule, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {DatePipe} from '@angular/common';

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
    feminin = sexeEnum.F;
    masculin = sexeEnum.M;

    // pour eviter de choisir des dates de naissances dans le futur
    maxDate = new Date();
    dateNais = new Date();
    titreDialog: string;
    enrgBtnText: string;

    constructor(public datepipe: DatePipe, public snackBar: MatSnackBar,
                public dialogRef: MatDialogRef<PatientAddFormComponent>,
                @Inject(MAT_DIALOG_DATA) public data: AffectationPatientDialogData) {

    }

    ngOnInit() {
        if (this.data.ajout) {
            this.titreDialog = "Ajout d'un nouveau patient";
            this.data.patient.naissance = this.datepipe.transform(this.dateNais, 'yyyy-MM-dd');
            this.enrgBtnText = "Création d'un nouveau patient";
        } else {
            this.titreDialog = `Modification des données de ${this.data.patient.prenom} ${this.data.patient.nom}`;
            this.enrgBtnText = "Enregistrer les modifications";
        }
        
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
