import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authStatus: boolean;
 
  constructor(private authService: AuthService, private router: Router ) { 
  }
  
  ngOnInit() {
    this.authStatus = this.authService.isAuth;    
  }

  //redirection à la page de connection du secrétaire
  loginS() {
    this.router.navigate(['secretairelog']);
  }

  //redirection à la page de connection de l'infirmier
  loginI() {
    this.router.navigate(['infirmierlog']);
  }


}
