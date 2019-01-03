import {Component, Inject, Input, OnInit} from '@angular/core';
import {ActeMedicalService} from '../services/acte-medical.service';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {AffectationPatientDialogData} from "../modify-patient/modify-patient.component";

export interface soinInterface {
    id: string;
    type: string;
    libelle: string;
    cout: number;
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
                @Inject(MAT_DIALOG_DATA) public data: AffectationPatientDialogData) {
    }

  ngOnInit() {
    //console.log('actes du patient : '+this.acteSoin);

      let unSoin: soinInterface = {
      id : "",
      type : "",
      libelle : "",
      cout : 0.0,
    };

    this.acteSoin.forEach( element => {    
      unSoin.id = this.actesService.getActesbyId(element).id;      
      unSoin.type = this.actesService.getActesbyId(element).type;
      unSoin.libelle = this.actesService.getActesbyId(element).nom;   

      let coef = this.actesService.getActesbyId(element).coef;
      let cle = this.actesService.getActesbyId(element).cle;
      let cout = this.actesService.facture(coef,cle);
      unSoin.cout = cout;
     
      this.total += (+cout);

      this.dataActePatient.push(unSoin);
    });  
    //console.log(' cout : '+this.total);     
  }

    onNoClick() {
        this.dialogRef.close();
    }
}
