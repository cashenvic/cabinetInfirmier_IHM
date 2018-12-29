import { Component, OnInit } from '@angular/core';
import { CabinetMedicalService } from '../services/cabinet-medical.service';
import { InfirmierInterface } from '../dataInterfaces/infirmier';

@Component({
  selector: 'app-modify-infirmier',
  templateUrl: './modify-infirmier.component.html',
  styleUrls: ['./modify-infirmier.component.css']
})
export class ModifyInfirmierComponent implements OnInit {
  ajouter = false;
  affecter =false;
  supprimer = false;
  infirmiers : InfirmierInterface[];

  constructor(private cabinetService : CabinetMedicalService) {  
  
  }

  ngOnInit() {
    this.cabinetService.getData('/data/cabinetInfirmier.xml').then(cabinet => {
      this.infirmiers = cabinet.infirmiers;
    });
  }

  ajoutInf(){
    this.ajouter =true;
  }
}
