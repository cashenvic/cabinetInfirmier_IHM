import { Component, OnInit } from '@angular/core';
import {CabinetInterface} from '../dataInterfaces/cabinet';

@Component({
  selector: 'app-secretary',
  templateUrl: './secretary.component.html',
  styleUrls: ['./secretary.component.css']
})

export class SecretaryComponent implements OnInit {
  cabinetInt: CabinetInterface;
  infirmier = false;
  patient = false;
  constructor() {    
  }
  ngOnInit() {}

  onInfirmier() {
    this.infirmier = true;
    this.patient = false ;
  }

  onPatient() {
    this.patient = true ;
    this.infirmier = false;
  }

}
