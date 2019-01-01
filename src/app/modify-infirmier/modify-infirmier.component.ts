import { Component, OnInit } from '@angular/core';
import { CabinetMedicalService } from '../services/cabinet-medical.service';
import { InfirmierInterface } from '../dataInterfaces/infirmier';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Log } from '../dataInterfaces/Log';

@Component({
  selector: 'app-modify-infirmier',
  templateUrl: './modify-infirmier.component.html',
  styleUrls: ['./modify-infirmier.component.css']
})
export class ModifyInfirmierComponent implements OnInit {
  ajouter = false;
  infirmiers : InfirmierInterface[];

  constructor(private cabinetService : CabinetMedicalService, private router: Router, private authService : AuthService ) {   
  }

  ngOnInit() {
    const person = Log.secretaire;
    this.authService.verifLog(person);
    
    this.cabinetService.getData('/data/cabinetInfirmier.xml').then(cabinet => {
      this.infirmiers = cabinet.infirmiers;
    });
  }

  ajoutInf(){
    this.ajouter =true;
    this.router.navigate(['ajout-infirmier']);
  }

}
