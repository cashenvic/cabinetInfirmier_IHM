import { Injectable } from '@angular/core';
import { Log } from '../dataInterfaces/Log';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private router: Router){
    
  }
  //par défaut 
  isAuth = false;
  whoLog : Log = Log.nobody;

  //fonction de connection d'un compte
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

  //fonction de déconnection d'un compte
  signOut() {
    //si la personne n'est pas encore connecté sur un compte
    if( this.isAuth === false){      
      console.log("Vous n'êtes pas encore connecter");
    }
    else {        
      this.whoLog = Log.nobody;
      this.isAuth = false;    
      ///redirection sur la page login
      this.router.navigate(['login']);
      console.log("Vous êtes maintenant déconnecter");
    }
  }

  //fonction qui restricte l'accès à certain url en fonction de la personne connectée
  verifLog(person : Log){
    if(this.isAuth && (this.whoLog == person) ) {
      return true;
    }
    //accès refusé et redirection à la page correspondant à sa page de connection
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
