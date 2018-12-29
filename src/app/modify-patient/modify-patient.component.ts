import { Component, OnInit } from '@angular/core';
import { CabinetMedicalService } from '../services/cabinet-medical.service';
import { PatientInterface } from '../dataInterfaces/patient';

@Component({
  selector: 'app-modify-patient',
  templateUrl: './modify-patient.component.html',
  styleUrls: ['./modify-patient.component.css']
})
export class ModifyPatientComponent implements OnInit {
  ajouter = false;
  affecter = false;
  desaffecter = false;
  supprimer = false;
  patients : PatientInterface[];

  constructor(private cabinetService : CabinetMedicalService) {    
  }

  ngOnInit() {
    this.cabinetService.getData('/data/cabinetInfirmier.xml').then(cabinet => {
      this.patients = cabinet.patientsNonAffectes;
    });
  }


}
