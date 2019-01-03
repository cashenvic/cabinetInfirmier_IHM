import {Component, Inject, Input, OnInit} from '@angular/core';
import {ActeMedicalService} from '../services/acte-medical.service';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {PatientInterface} from "../dataInterfaces/patient";

export interface soinInterface {
    id: string;
    type: string;
    libelle: string;
    cout: number;
}

export interface soinDialogData {
    actes: soinInterface[];
    patient: PatientInterface;
    total: number;
}

@Component({
  selector: 'app-cout-soins',
  templateUrl: './cout-soins.component.html',
  styleUrls: ['./cout-soins.component.css']
})
export class CoutSoinsComponent implements OnInit {
    @Input() acteSoin: Array<string>;
    total: number = 0.0;

    dataActePatient: Array<soinInterface> = [];
  displayedColumns: string[] = ['acteId', 'type', 'libelle', 'cout'];

    constructor(private actesService: ActeMedicalService, public dialogRef: MatDialogRef<CoutSoinsComponent>,
                @Inject(MAT_DIALOG_DATA) public data: soinDialogData) {
    }

  ngOnInit() {
    //console.log('actes du patient : '+this.acteSoin);


    //console.log(' cout : '+this.total);     
  }

    onNoClick() {
        this.dialogRef.close();
    }
}
