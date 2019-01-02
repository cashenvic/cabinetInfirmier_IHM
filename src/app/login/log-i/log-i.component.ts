import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { InfirmierInterface } from 'src/app/dataInterfaces/infirmier';
import { CabinetMedicalService } from 'src/app/services/cabinet-medical.service';
import { Log } from 'src/app/dataInterfaces/Log';

@Component({
  selector: 'app-log-i',
  templateUrl: './log-i.component.html',
  styleUrls: ['./log-i.component.css']
})
export class LogIComponent implements OnInit {
  IdInfirmier : String;
  infirmiers : InfirmierInterface[];
  wholog : Log;
  constructor(private cabinetService : CabinetMedicalService, private authService: AuthService,  private router: Router ) { 
    
  }

  ngOnInit() {
    //pull les données cabinetInfirmier.xml à partir du serveur
    this.cabinetService.getData('/data/cabinetInfirmier.xml').then(cabinet => {
      this.infirmiers = cabinet.infirmiers;
    });
  }
  
  //function test de connexion
  onSignInI() {    
    this.wholog = Log.infirmier;

    let vérif : boolean = false;
    this.infirmiers.forEach( (element,i) => {
      
      if(this.IdInfirmier == element.id){
        //si id existe
        vérif =true;
        //connexion
        this.authService.signIn( this.wholog).then(
          () => {
            console.log('Connection avec succès');
            //redirection à la page infirmier 
            this.router.navigate(['infirmier/'+this.IdInfirmier]);
          }
        );
      }
    });

    //si id incorrect/inexistant retourne un message d'alerte
    if(!vérif){      
      alert("ID Invalid");
    }
  }
  
  //déconnection
  onSignOut() {    
    this.authService.signOut();
  }  
}
