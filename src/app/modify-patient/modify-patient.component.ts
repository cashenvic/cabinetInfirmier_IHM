import { Component, OnInit } from '@angular/core';
import { CabinetMedicalService } from '../services/cabinet-medical.service';
import { PatientInterface } from '../dataInterfaces/patient';
import { InfirmierComponent } from '../infirmier/infirmier.component';
import { InfirmierInterface } from '../dataInterfaces/infirmier';
import { element } from '@angular/core/src/render3';

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


  constructor(private cabinetService : CabinetMedicalService) {    
  }

  ngOnInit() {
    this.cabinetService.getData('/data/cabinetInfirmier.xml').then(cabinet => {
      this.patients = cabinet.patientsNonAffectes;
      /*cabinet.infirmiers.forEach( (element)=> {
        //this.patients.push(element.patients);
      });*/

    });
  }

  ajoutP(){
    this.ajouter=true;
  }


}
