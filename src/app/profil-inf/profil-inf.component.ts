import { Component, OnInit, Input } from '@angular/core';
import { InfirmierInterface } from '../dataInterfaces/infirmier';
import { PatientInterface } from '../dataInterfaces/patient';
import { sexeEnum } from '../dataInterfaces/sexe';

@Component({
  selector: 'app-profil-inf',
  templateUrl: './profil-inf.component.html',
  styleUrls: ['./profil-inf.component.css']
})
export class ProfilInfComponent implements OnInit {
  @Input() infirmier : InfirmierInterface;
  imgSrc: string;
  patients : PatientInterface[];
  panelOpenState = false;
  
  constructor(){

  }
  ngOnInit() {
    this.imgSrc = 'data/' + this.infirmier.photo;
    this.patients = this.infirmier.patients;
  }


}
