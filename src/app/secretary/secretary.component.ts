import { Component, OnInit } from '@angular/core';
import { CabinetMedicalService } from '../services/cabinet-medical.service';
import {CabinetInterface} from '../dataInterfaces/cabinet';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secretary',
  templateUrl: './secretary.component.html',
  styleUrls: ['./secretary.component.css']
})

export class SecretaryComponent implements OnInit {
  cabinetInt: CabinetInterface;
  infirmier = false;
  patient = false;
  constructor(private authService : AuthService, private router: Router, private cabinetService : CabinetMedicalService) {  
  
  }

  ngOnInit() {
    this.cabinetService.getData('/data/cabinetInfirmier.xml ').then(cabinet => {
        this.cabinetInt = cabinet;
    }); 
    console.log('cabinet :' + this.cabinetInt);
  }

  onInfirmier() {
    this.infirmier = true;
    this.patient = false ;
  }

  onPatient() {
    this.patient = true ;
    this.infirmier = false;
  }

}
