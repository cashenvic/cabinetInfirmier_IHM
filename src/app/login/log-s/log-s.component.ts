import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Log } from 'src/app/dataInterfaces/Log';

@Component({
  selector: 'app-log-s',
  templateUrl: './log-s.component.html',
  styleUrls: ['./log-s.component.css']
})
export class LogSComponent implements OnInit {
  wholog : Log;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSignInS() {    
    this.wholog = Log.secretaire;
    this.authService.signIn(this.wholog).then(
      () => {
        console.log('Connection avec succès');
        this.router.navigate(['secretaire']);
      }
    );
  }
  
  
  onSignOut() {    
    this.authService.signOut();
  }  

}
