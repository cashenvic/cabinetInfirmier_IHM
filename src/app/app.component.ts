import { Component, EventEmitter, Output  } from '@angular/core';
import { CabinetMedicalService } from './services/cabinet-medical.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() sidenavClose = new EventEmitter();
  @Output() public sidenavToggle = new EventEmitter();
  cabinetNom : String;
  cabinetImg : String;
  pagelog;

  wholog : String ='a';

  constructor( private router: Router, private cabinetService : CabinetMedicalService ) { 
  }
  ngOnInit() {
    this.cabinetService.getData('/data/cabinetInfirmier.xml').then(cabinet => {
      this.cabinetNom = cabinet.nom;
      console.log('cabinet :' + this.cabinetNom);
    });
    this.cabinetImg = 'data/hospital-icon.png';
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
