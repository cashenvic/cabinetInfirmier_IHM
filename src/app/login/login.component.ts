import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  IdInfirmier : String;
  authStatus: boolean;
  authSecretary = false;
  authInfirmier = false;
  constructor(private authService: AuthService, private router: Router ) { 
    this.IdInfirmier ='000'
  }
  
  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  onSecretaire(){
    this.authSecretary = true;
    this.authInfirmier = false;
  }

  onInfirmier(){
    this.authInfirmier = true;
    this.authSecretary = false;
  }

  onSignInS() {
    this.authService.signIn().then(
      () => {
        console.log('Sign in successful!');
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['secretary']);
      }
    );
  }

  onSignInI() {
    this.authService.signIn().then(
      () => {
        console.log('Sign in successful!');
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['infirmier']);
      }
    );
  }

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

}
