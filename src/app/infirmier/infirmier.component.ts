import {Component, OnInit} from '@angular/core';
import {InfirmierInterface} from '../dataInterfaces/infirmier';
import {CabinetMedicalService} from '../services/cabinet-medical.service';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Log} from '../dataInterfaces/Log';
import {ActeMedicalService} from '../services/acte-medical.service';
import {CoutSoinsComponent, soinInterface} from "../cout-soins/cout-soins.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-infirmier',
  templateUrl: './infirmier.component.html',
  styleUrls: ['./infirmier.component.css']
})
export class InfirmierComponent implements OnInit {
  panelOpenState = false;
    infirmier: InfirmierInterface;

    imgSrc: string;
    id: string;

    acteSoin: Array<string>;
    total: number = 0.0;

    dataActePatient: Array<soinInterface> = [];

    constructor(private cabinetService: CabinetMedicalService,
                private route: ActivatedRoute, private authService: AuthService,
                private actesService: ActeMedicalService, private dialog: MatDialog,) {
  }

  ngOnInit() {    
    const person = Log.infirmier;
    this.authService.verifLog(person);

    this.id = this.route.snapshot.params['id'];

    this.infirmier = this.cabinetService.getInfirmierById(this.id);    

    this.imgSrc = 'data/' + this.infirmier.photo;      
     
  }

    openFacture(patient) {
        let unSoin: soinInterface = {
            id: "",
            type: "",
            libelle: "",
            cout: 0.0,
        };

        this.acteSoin = patient.visite.actes;

        this.acteSoin.forEach(element => {
            unSoin.id = this.actesService.getActesbyId(element).id;
            unSoin.type = this.actesService.getActesbyId(element).type;
            unSoin.libelle = this.actesService.getActesbyId(element).nom;

            let coef = this.actesService.getActesbyId(element).coef;
            let cle = this.actesService.getActesbyId(element).cle;
            let cout = this.actesService.facture(coef, cle);
            unSoin.cout = cout;

            this.total += (+cout);

            this.dataActePatient.push(unSoin);
        });
        console.log('le total du cout des actes est: ' + this.total);
        const dialogRef = this.dialog.open(CoutSoinsComponent, {
            width: '750px',
            data: {actes: this.dataActePatient, patient: patient, total: this.total}
        });

        dialogRef.afterClosed().subscribe(patient => {
        });
    }


}
