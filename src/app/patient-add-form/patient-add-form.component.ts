import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

import {DateAdapter, MAT_DATE_LOCALE, MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {AffectationPatientDialogData} from "../modify-patient/modify-patient.component";
import {sexeEnum} from "../dataInterfaces/sexe";

@Component({
    selector: 'app-patientaddform',
    templateUrl: './patient-add-form.component.html',
    styleUrls: ['./patient-add-form.component.css'],
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
    ]
})

export class PatientAddFormComponent implements OnInit {
    @ViewChild('formulaire') formulaire: NgForm;
    sexe: string;
    ajout:boolean;
    feminin = sexeEnum.F;
    masculin = sexeEnum.M;

    // pour eviter de choisir des dates de naissances dans le futur
    maxDate = new Date();
    titreDialog: string;
    enrgBtnText: string;

    constructor( private adapter: DateAdapter<any>, public snackBar: MatSnackBar,
                public dialogRef: MatDialogRef<PatientAddFormComponent>,
                @Inject(MAT_DIALOG_DATA) public data: AffectationPatientDialogData) {
        this.adapter.setLocale('fr');
    }

    ngOnInit() {
        if (this.data.ajout) {
            this.ajout = true;
            this.titreDialog = "Ajout d'un nouveau patient";
            this.enrgBtnText = "Création d'un nouveau patient";
        } else {
            this.ajout = false;
            this.titreDialog = `Modification des données de [ ${this.data.patient.prenom} ${this.data.patient.nom} ]`;
            this.enrgBtnText = "Enregistrer les modifications";
        }
        
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
