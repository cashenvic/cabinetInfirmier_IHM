import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { InfirmierInterface } from 'src/app/dataInterfaces/infirmier';
import { CabinetMedicalService } from 'src/app/services/cabinet-medical.service';

@Component({
  selector: 'app-log-i',
  templateUrl: './log-i.component.html',
  styleUrls: ['./log-i.component.css']
})
export class LogIComponent implements OnInit {
  @Input() authStatus : Boolean;
  @Input() wholog : String;
  IdInfirmier : String;
  infirmiers : InfirmierInterface[];
  positionIndex : number;

  constructor(private cabinetService : CabinetMedicalService, private authService: AuthService, private router: Router ) { 
  }

  ngOnInit() {
    this.cabinetService.getData('/data/cabinetInfirmier.xml').then(cabinet => {
      this.infirmiers = cabinet.infirmiers;
    });
  }

  

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
    this.wholog ="";
    this.router.navigate(['login']);
  }  

  verifId() : Boolean {
    let verif :Boolean = false;
    this.infirmiers.forEach( element => {
      if(this.IdInfirmier == element.id){
        console.log('vrai');
        return verif;
      }
    });
    return verif;
    alert("ID Invalid");
  }

  onSignInI() {
    let vérif : boolean = false;
    this.infirmiers.forEach( (element,i) => {
      if(this.IdInfirmier == element.id){
        vérif =true;
        this.authService.signIn().then(
          () => {
            console.log('Sign in successful! ->' + i);
            this.positionIndex = i;
            this.authStatus = this.authService.isAuth;
            this.wholog ='Infirmier';
            this.router.navigate(['infirmier']);
          }
        );
      }
    });
    if(!vérif){      
      alert("ID Invalid");
    }
  }

}
