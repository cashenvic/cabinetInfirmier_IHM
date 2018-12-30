import { Component, OnInit, Input } from '@angular/core';
import { InfirmierInterface } from '../dataInterfaces/infirmier';
import { PatientInterface } from '../dataInterfaces/patient';

@Component({
  selector: 'app-profil-inf',
  templateUrl: './profil-inf.component.html',
  styleUrls: ['./profil-inf.component.css']
})
export class ProfilInfComponent implements OnInit {
  @Input() infirmier : InfirmierInterface;
  imgSrc: string;

  constructor() { 
  }

  ngOnInit() {
    this.imgSrc = 'data/' + this.infirmier.photo;
  }

  onDesaffectationPatient(patient: PatientInterface) {
    console.log(`patient ${patient.prenom} ${patient.nom} est désaffecté`);
  }

}
