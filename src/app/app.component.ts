import { Component, EventEmitter, Output  } from '@angular/core';
import { CabinetMedicalService } from './services/cabinet-medical.service';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { ActeMedicalService } from './services/acte-medical.service';


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

  constructor( private actesService : ActeMedicalService,  private router: Router, private cabinetService : CabinetMedicalService,  private authService : AuthService ) { 
  }
  ngOnInit() {
    //pull les données cabinetInfirmier.xml à partir du serveur
    this.cabinetService.getData('/data/cabinetInfirmier.xml').then(cabinet => {
      this.cabinetNom = cabinet.nom;
      //console.log('cabinet :' + this.cabinetNom);
    });
    this.cabinetImg = 'data/hospital-icon.png';

    this.actesService.getDataActe('/data/actes.xml');

  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  //fonction de déconnection
  Logout(){
    this.authService.signOut();
  }

  //fonction qui redirige à la page de login lorqu'on clique sur le nom ou le logo du cabinet
  redigAccueil(){
    if(!this.authService.isAuth){
      this.router.navigate(['login']);
    }
  }
}
