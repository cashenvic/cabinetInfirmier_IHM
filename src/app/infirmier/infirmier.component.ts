import { Component, OnInit } from '@angular/core';
import { InfirmierInterface } from '../dataInterfaces/infirmier';
import { CabinetMedicalService } from '../services/cabinet-medical.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Log } from '../dataInterfaces/Log';
import { ActeMedicalService } from '../services/acte-medical.service';
import { ActeInterface } from '../dataInterfaces/actes';

@Component({
  selector: 'app-infirmier',
  templateUrl: './infirmier.component.html',
  styleUrls: ['./infirmier.component.css']
})
export class InfirmierComponent implements OnInit {
  panelOpenState = false;
  infirmier : InfirmierInterface ;

  imgSrc : string;
  id : string;

  constructor(private cabinetService : CabinetMedicalService, 
    private route: ActivatedRoute, private authService : AuthService,
    private actesService : ActeMedicalService ) {   
  }

  ngOnInit() {    
    const person = Log.infirmier;
    this.authService.verifLog(person);

    this.id = this.route.snapshot.params['id'];

    this.infirmier = this.cabinetService.getInfirmierById(this.id);    

    this.imgSrc = 'data/' + this.infirmier.photo;      
     
  }
 



}
