import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {InfirmierInterface} from '../dataInterfaces/infirmier';
import {CabinetMedicalService} from '../services/cabinet-medical.service';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Log} from '../dataInterfaces/Log';
import {ActeMedicalService} from '../services/acte-medical.service';
import {ActeInterface} from '../dataInterfaces/actes';
import {PatientInterface} from "../dataInterfaces/patient";

@Component({
    selector: 'app-infirmier',
    templateUrl: './infirmier.component.html',
    styleUrls: ['./infirmier.component.css']
})
export class InfirmierComponent implements OnInit {    
    @Output() desaffectEmitter: EventEmitter<PatientInterface> = new EventEmitter();
    panelOpenState = false;

    infirmiers: InfirmierInterface[];
    infirmier: InfirmierInterface;
    actesMedical: ActeInterface;

    imgSrc: String;
    id: String;

    constructor(private cabinetService: CabinetMedicalService, private route: ActivatedRoute, private authService: AuthService,
    private actesService: ActeMedicalService) {        
    }

    ngOnInit() {
        //vérification de l'accès au page            
        const person = Log.infirmier;
        this.authService.verifLog(person);

        //récuperation de l'id présent sur l'URL de la page
        this.id = this.route.snapshot.params['id'];

        //pull les données cabinetInfirmier.xml à partir du serveur
        this.cabinetService.getData('/data/cabinetInfirmier.xml').then(cabinet => {
            this.infirmiers = cabinet.infirmiers;
            //récuperation des données de l'infirmier dont l'id est passé en paramètre
            this.infirmier = this.cabinetService.getInfirmierById(this.id, this.infirmiers);
            this.imgSrc = 'data/' + this.infirmier.photo;
        });

        //pull les données actes.xml à partir du serveur
        this.actesService.getDataActe('/data/actes.xml').then(actes => {
            this.actesMedical = actes;
        });
    }

    
    patientDesaffected() {
        this.desaffectEmitter.emit();
    }
}
