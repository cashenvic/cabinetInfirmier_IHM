import { Component, OnInit, Input } from '@angular/core';
import { InfirmierInterface } from '../dataInterfaces/infirmier';
import { CabinetMedicalService } from '../services/cabinet-medical.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Log } from '../dataInterfaces/Log';

@Component({
  selector: 'app-infirmier',
  templateUrl: './infirmier.component.html',
  styleUrls: ['./infirmier.component.css']
})
export class InfirmierComponent implements OnInit {
  @Input() position : number;
  panelOpenState: boolean = false;
  allExpandState = false;

  infirmiers : InfirmierInterface[];
  infirmier : InfirmierInterface;
  imgSrc : String;
  id : String;

  constructor(private cabinetService : CabinetMedicalService, private router: Router,
    private route: ActivatedRoute, private authService : AuthService ) {   
  }

  ngOnInit() {    
    const person = Log.infirmier;
    this.authService.verifLog(person);

    this.id = this.route.snapshot.params['id'];

    this.cabinetService.getData('/data/cabinetInfirmier.xml').then(cabinet => {
      this.infirmiers = cabinet.infirmiers;
      this.infirmier = this.cabinetService.getInfirmierById(this.id , this.infirmiers);
      console.log(this.infirmier);
    });
    this.imgSrc = 'data/' + this.infirmier.photo;

  }


}
