import { Injectable } from '@angular/core';
import { Log } from '../dataInterfaces/Log';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private router: Router){
    
  }
  isAuth = false;
  whoLog : Log = Log.nobody;

  signIn(person : Log) {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            if(this.isAuth==false){
              this.isAuth = true;
              this.whoLog = person;
              resolve(true);
            }
            else{
              reject("Vous êtes déjà connecter sur un compte.\nIl faut vous déconnecter");
            }
            
          }, 500
        );
      }
    );
  }

  signOut() {
    if( this.isAuth === false){      
      console.log("Vous n'êtes pas encore connecter");
    }
    else {        
      this.whoLog = Log.nobody;
      this.isAuth = false;    
      this.router.navigate(['login']);
      console.log("Vous êtes maintenant déconnecter");
    }
  }

  verifLog(person : Log){
    if(this.isAuth && (this.whoLog == person) ) {
      return true;
    }
    else if(this.isAuth && (person == Log.infirmier)){
      this.router.navigate(['infirmierlog']);
    } 
    else if(this.isAuth && (person == Log.secretaire)){
      this.router.navigate(['secretairelog']);
    } 
    else {
      this.router.navigate(['login']);
    }
  }
}
