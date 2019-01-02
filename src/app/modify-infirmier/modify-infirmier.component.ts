import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CabinetMedicalService} from '../services/cabinet-medical.service';
import {InfirmierInterface} from '../dataInterfaces/infirmier';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Log} from '../dataInterfaces/Log';
import {ActeMedicalService} from "../services/acte-medical.service";
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
    @Output() patientDesaff = new EventEmitter();
    @Input() infirmier: InfirmierInterface;
    imgSrc: string;
    patients: PatientInterface[];
    actesMedical: ActeInterface;

    panelOpenState = false;

    constructor(private actesService: ActeMedicalService, private cabinetService: CabinetMedicalService, private router: Router,
                private authService: AuthService) {
    }

    ngOnInit() {
        const person = Log.secretaire;
        this.authService.verifLog(person);

        this.cabinetService.getData('/data/cabinetInfirmier.xml').then(cabinet => {
            this.infirmiers = cabinet.infirmiers;
        });

        this.actesService.getDataActe('/data/actes.xml').then(actes => {
            this.actesMedical = actes;
            //console.log(this.actesMedical.types);
        });

        this.imgSrc = 'data/' + this.infirmier.photo;
        this.patients = this.infirmier.patients;
        console.log('Fin init modify-infirmier');
    }

    ajoutInf() {
        this.ajouter = true;
    this.router.navigate(['ajout-infirmier']);
  }

    onPatientDesaff() {
        this.patientDesaff.emit();
    }

}
