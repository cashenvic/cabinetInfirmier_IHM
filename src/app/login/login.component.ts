import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() secretairelog : Boolean;
  @Input() infirmierelog : Boolean;

  IdInfirmier : String;
  authStatus: boolean;
 
  constructor(private authService: AuthService, private router: Router ) { 
    this.IdInfirmier ='000'
  }
  
  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  onSecretaire(){
    this.secretairelog = true;
    this.infirmierelog = false;
  }

  onInfirmier(){
    this.infirmierelog = true;
    this.secretairelog = false;
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
