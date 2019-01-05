import { Component, OnInit } from '@angular/core';
import { CabinetMedicalService } from '../services/cabinet-medical.service';
import { Adresse } from '../dataInterfaces/adresse';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  cabinetNom : String;
  cabinetAdress : Adresse = {
    ville: "",
    codePostal: 0,
    rue: "",
    numero: "",
    etage: "",
  };
  
  constructor(private cabinetService : CabinetMedicalService) { 
    this.cabinetService.getData('/data/cabinetInfirmier.xml').then(cabinet => {
      this.cabinetNom = cabinet.nom;
      this.cabinetAdress = cabinet.adresse;
    });
  }

  ngOnInit() {
  }

}

