import { Component, OnInit, Input } from '@angular/core';
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
    this.cabinetService.getData('/data/cabinetInfirmier.xml').then(cabinet => {
      this.infirmiers = cabinet.infirmiers;
    });
  }
  
  onSignInI() {    
    this.wholog = Log.infirmier;
    let vérif : boolean = false;
    this.infirmiers.forEach( (element,i) => {
      if(this.IdInfirmier == element.id){
        vérif =true;
        this.authService.signIn( this.wholog).then(
          () => {
            console.log('Connection avec succès');
            this.router.navigate(['infirmier/'+this.IdInfirmier]);
          }
        );
      }
    });
    if(!vérif){      
      alert("ID Invalid");
    }
  }
  
  onSignOut() {    
    this.authService.signOut();
  }  
}
