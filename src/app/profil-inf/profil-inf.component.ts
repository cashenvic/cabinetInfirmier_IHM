import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InfirmierInterface} from '../dataInterfaces/infirmier';
import {PatientInterface} from '../dataInterfaces/patient';
import {ActeMedicalService} from '../services/acte-medical.service';
import {AuthService} from '../services/auth.service';
import {Log} from '../dataInterfaces/Log';
import {ActeInterface} from '../dataInterfaces/actes';
import {CabinetMedicalService} from "../services/cabinet-medical.service";

@Component({
  selector: 'app-profil-inf',
  templateUrl: './profil-inf.component.html',
  styleUrls: ['./profil-inf.component.css']
})
export class ProfilInfComponent implements OnInit {
    @Input() infirmier: InfirmierInterface;
    imgSrc: string;
    patients: PatientInterface[];
    actesMedical: ActeInterface;
    infirmiers: InfirmierInterface[];

    panelOpenState = false;

    affecter = false;
    desaffecter = false;
    @Output() desaffecterEmitter: EventEmitter<PatientInterface> = new EventEmitter<PatientInterface>();

    constructor(private actesService: ActeMedicalService, private authService: AuthService, private cabinetService: CabinetMedicalService) {

    }

    ngOnInit() {
        const person = Log.secretaire;
        this.authService.verifLog(person);

        this.infirmiers = this.cabinetService.cabinet.infirmiers;
        this.actesMedical =  this.actesService.actesMedical;
        
        this.imgSrc = 'data/' + this.infirmier.photo;
        this.patients = this.infirmier.patients;
    }


    affecterPat() {
        this.affecter = true;
    }

    onDesaffecterPat() {
        this.desaffecterEmitter.emit();
    }

    getInfirmiers() {

    }
}
