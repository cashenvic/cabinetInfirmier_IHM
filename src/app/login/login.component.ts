import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() wholog : String;
  authStatus: boolean;
 
  constructor(private authService: AuthService, private router: Router ) { 
  }
  
  ngOnInit() {
    this.authStatus = this.authService.isAuth;
    
  }


  loginS() {
    this.router.navigate(['log-s']);
  }

  loginI() {
    this.router.navigate(['log-i']);
  }


}
