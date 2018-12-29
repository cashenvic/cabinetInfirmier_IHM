import { Component, OnInit, Input } from '@angular/core';
import { InfirmierInterface } from '../dataInterfaces/infirmier';

@Component({
  selector: 'app-profil-inf',
  templateUrl: './profil-inf.component.html',
  styleUrls: ['./profil-inf.component.css']
})
export class ProfilInfComponent implements OnInit {
  @Input() infirmier : InfirmierInterface;
  imgSrc: string;
  lien : String;

  constructor() { 
  }

  ngOnInit() {
    this.imgSrc = 'data/' + this.infirmier.photo;
    
    this.lien = 'profile';
  }

  redigProfile(){
    this.lien = 'profile';
  }
  redigPatient(){
    this.lien = 'patient';
  }

}
