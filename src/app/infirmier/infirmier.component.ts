import { Component, OnInit, Input } from '@angular/core';
import { InfirmierInterface } from '../dataInterfaces/infirmier';
import { CabinetMedicalService } from '../services/cabinet-medical.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infirmier',
  templateUrl: './infirmier.component.html',
  styleUrls: ['./infirmier.component.css']
})
export class InfirmierComponent implements OnInit {
  @Input() positionIndex : number;
  panelOpenState: boolean = false;
  allExpandState = false;

  infirmiers : InfirmierInterface[];
  infirmier : InfirmierInterface;
  imgSrc : String;
  constructor(private cabinetService : CabinetMedicalService, private router: Router ) {   
  }

  ngOnInit() {
    this.cabinetService.getData('/data/cabinetInfirmier.xml').then(cabinet => {
      this.infirmiers = cabinet.infirmiers;
    });
    this.infirmier = this.infirmiers[this.positionIndex];
    this.imgSrc = 'data/' + this.infirmier.photo;
  }


}
