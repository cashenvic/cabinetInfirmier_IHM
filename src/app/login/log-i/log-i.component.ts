import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';
import {InfirmierInterface} from 'src/app/dataInterfaces/infirmier';
import {CabinetMedicalService} from 'src/app/services/cabinet-medical.service';
import {Log} from 'src/app/dataInterfaces/Log';
import {MatSnackBar} from "@angular/material";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-log-i',
  templateUrl: './log-i.component.html',
  styleUrls: ['./log-i.component.css']
})
export class LogIComponent implements OnInit {
  IdInfirmier : String;
  infirmiers : InfirmierInterface[];
  wholog : Log;
    @ViewChild('form') monform: NgForm;

    constructor(private cabinetService: CabinetMedicalService, private authService: AuthService, private router: Router,
                private snackBar: MatSnackBar) {
    
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
        this.snackBar.open(`L'id que vous avez entré ne correspond à auncun infirmier`, 'Ok', {
            duration: 6000,
        });
    }
  }
  
  //déconnection
  onSignOut() {    
    this.authService.signOut();
  }  
}
