import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AffectationPatientDialogData} from "../modify-patient/modify-patient.component";
import {InfirmierInterface} from "../dataInterfaces/infirmier";

@Component({
    selector: 'app-patientaffectdialog',
    templateUrl: './patient-affect-dialog.component.html',
    styleUrls: ['./patient-affect-dialog.component.css']
})
export class PatientAffectDialogComponent implements OnInit {
    infirmier: InfirmierInterface;

    constructor(public dialogRef: MatDialogRef<PatientAffectDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: AffectationPatientDialogData) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    closeDialog() {
        this.dialogRef.close('Fermé!');
    }

    ngOnInit() {
    }

}
