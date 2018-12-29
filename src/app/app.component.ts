import { Component } from '@angular/core';
import { CabinetMedicalService } from './services/cabinet-medical.service';
import { Router } from '@angular/router';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cabinetNom : String;
  cabinetIcon;
  secretairelog : Boolean = false;
  infirmierelog : Boolean = false;

  constructor( private router: Router, private cabinetService : CabinetMedicalService ) { 
  }
  ngOnInit() {
    this.cabinetService.getData('/data/cabinetInfirmier.xml').then(cabinet => {
      this.cabinetNom = cabinet.nom;
      console.log('cabinet :' + this.cabinetNom);
    });
  }

}
