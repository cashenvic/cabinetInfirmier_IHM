import { Component, OnInit } from '@angular/core';
import { CabinetMedicalService } from '../services/cabinet-medical.service';
import { InfirmierInterface } from '../dataInterfaces/infirmier';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modify-infirmier',
  templateUrl: './modify-infirmier.component.html',
  styleUrls: ['./modify-infirmier.component.css']
})
export class ModifyInfirmierComponent implements OnInit {
  ajouter = false;
  affecter = false;
  desaffecter = false;
  supprimer = false;
  infirmiers : InfirmierInterface[];

  constructor(private cabinetService : CabinetMedicalService, private router: Router ) {   
  }

  ngOnInit() {
    this.cabinetService.getData('/data/cabinetInfirmier.xml').then(cabinet => {
      this.infirmiers = cabinet.infirmiers;
    });
  }

  ajoutInf(){
    this.ajouter =true;
    this.router.navigate(['ajout-infirmier']);
  }

  affecterPat(){
    this.affecter=true;
  }

  desaffecterPat(){
    this.desaffecter=true;
  }
  supprimerInf(){
    this.supprimer=true;
  }

  
}
