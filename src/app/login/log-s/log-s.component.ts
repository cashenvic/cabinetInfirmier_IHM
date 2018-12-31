import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-s',
  templateUrl: './log-s.component.html',
  styleUrls: ['./log-s.component.css']
})
export class LogSComponent implements OnInit {
  @Input() authStatus : Boolean;
  @Input() wholog : String;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    console.log(this.wholog);
  }

  onSignInS() {
    this.authService.signIn().then(
      () => {
        console.log('Sign in successful!');
        this.authStatus = true;
        this.wholog ='Sécretaire';
        this.router.navigate(['secretary']);
      }
    );
  }
  
  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
    this.wholog ="";
    this.router.navigate(['login']);
  }

}
