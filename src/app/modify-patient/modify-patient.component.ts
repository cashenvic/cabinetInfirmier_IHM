import { Component, OnInit } from '@angular/core';
import { CabinetMedicalService } from '../services/cabinet-medical.service';
import { PatientInterface } from '../dataInterfaces/patient';
import { ActeInterface } from '../dataInterfaces/actes';
import { AuthService } from '../services/auth.service';
import { ActeMedicalService } from '../services/acte-medical.service';
import { Log } from '../dataInterfaces/Log';

@Component({
  selector: 'app-modify-patient',
  templateUrl: './modify-patient.component.html',
  styleUrls: ['./modify-patient.component.css']
})
export class ModifyPatientComponent implements OnInit {
  ajouter = false;
  affecter = false;
  supprimer = false;
  patients : PatientInterface[];

  actesMedical : ActeInterface;

  constructor(private cabinetService : CabinetMedicalService, private authService : AuthService,
    private actesService : ActeMedicalService) {    
  }

  ngOnInit() {
    const person = Log.secretaire;
    this.authService.verifLog(person);

    this.cabinetService.getData('/data/cabinetInfirmier.xml').then(cabinet => {
      this.patients = cabinet.patientsNonAffectes;
      /*cabinet.infirmiers.forEach( (element)=> {
        //this.patients.push(element.patients);
      });*/
    });

    this.actesService.getDataActe('/data/actes.xml').then(actes => {
      this.actesMedical = actes;      
    }); 

  }

  ajoutP(){
    this.ajouter=true;
  }


}
