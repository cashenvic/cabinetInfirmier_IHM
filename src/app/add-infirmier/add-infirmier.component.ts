import { Component, OnInit } from '@angular/core';
import { InfirmierInterface } from '../dataInterfaces/infirmier';

@Component({
  selector: 'app-add-infirmier',
  templateUrl: './add-infirmier.component.html',
  styleUrls: ['./add-infirmier.component.css']
})
export class AddInfirmierComponent implements OnInit {

  infirmier : InfirmierInterface;
  
  constructor() {/*
    this.infirmier.id = '000';
    this.infirmier.prenom = 'Alexandre';
    this.infirmier.nom = 'Demeure';
    this.infirmier.photo = 'photo.jpn';
    this.infirmier.patients = null;
    this.infirmier.adresse = {
      ville: 'Grenoble',
      codePostal: 38000,
      rue: 'rue de la Chimie',
      numero: '060',
      etage: null
    };*/
  }
  
  ngOnInit() {
  }

}
