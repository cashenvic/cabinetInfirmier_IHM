import { Component, OnInit } from '@angular/core';
import {CabinetInterface} from '../dataInterfaces/cabinet';
import { Log } from '../dataInterfaces/Log';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-secretary',
  templateUrl: './secretary.component.html',
  styleUrls: ['./secretary.component.css']
})

export class SecretaryComponent implements OnInit {
  cabinetInt: CabinetInterface;
  infirmier = false;
  patient = false;
  constructor(private authService : AuthService) {    
  }
  ngOnInit() {
    const person = Log.secretaire;
    this.authService.verifLog(person);
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
