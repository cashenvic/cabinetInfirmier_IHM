import { Component, OnInit, Input } from '@angular/core';
import { InfirmierInterface } from '../dataInterfaces/infirmier';
import { PatientInterface } from '../dataInterfaces/patient';
import { ActeMedicalService } from '../services/acte-medical.service';
import { AuthService } from '../services/auth.service';
import { Log } from '../dataInterfaces/Log';
import { ActeInterface } from '../dataInterfaces/actes';

@Component({
  selector: 'app-profil-inf',
  templateUrl: './profil-inf.component.html',
  styleUrls: ['./profil-inf.component.css']
})
export class ProfilInfComponent implements OnInit {
  @Input() infirmier : InfirmierInterface;
  imgSrc: string;
  patients : PatientInterface[];
  actesMedical : ActeInterface;

  panelOpenState = false;
  
  affecter = false;
  desaffecter = false;
  
  constructor(private actesService : ActeMedicalService, private authService : AuthService,){

  }
  ngOnInit() {
    const person = Log.secretaire;
    this.authService.verifLog(person);

    this.actesService.getDataActe('/data/actes.xml').then(actes => {
      this.actesMedical = actes;      
      console.log(this.actesMedical.types);
    });  

    this.imgSrc = 'data/' + this.infirmier.photo;
    this.patients = this.infirmier.patients;
  }

  
  affecterPat(){
    this.affecter=true;
  }

  desaffecterPat(){
    this.desaffecter=true;
  }


}
