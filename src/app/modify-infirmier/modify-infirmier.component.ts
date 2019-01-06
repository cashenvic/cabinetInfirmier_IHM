import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CabinetMedicalService} from '../services/cabinet-medical.service';
import {InfirmierInterface} from '../dataInterfaces/infirmier';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {PatientInterface} from "../dataInterfaces/patient";
import {ActeInterface} from "../dataInterfaces/actes";

@Component({
  selector: 'app-modify-infirmier',
  templateUrl: './modify-infirmier.component.html',
  styleUrls: ['./modify-infirmier.component.css']
})
export class ModifyInfirmierComponent implements OnInit {
    ajouter = false;
    infirmiers: InfirmierInterface[];
    @Output() patientStateChanged = new EventEmitter();
    @Input() infirmier: InfirmierInterface;
    imgSrc: string;
    patients: PatientInterface[];
    actesMedical: ActeInterface;

    panelOpenState = false;

    constructor(private cabinetService: CabinetMedicalService, private router: Router,
                private authService: AuthService) {
    }

    ngOnInit() {
        //vérification de l'accès au page
        /*const person = Log.secretaire;
        this.authService.verifLog(person);*/

        this.imgSrc = 'data/' + this.infirmier.photo;
        this.patients = this.infirmier.patients;
    }

    onPatientStateChanged() {
        this.patientStateChanged.emit();
    }

}
