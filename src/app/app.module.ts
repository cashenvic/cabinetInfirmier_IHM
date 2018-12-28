import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SecretaryComponent } from './secretary/secretary.component';
import { InfirmierComponent } from './infirmier/infirmier.component';
import { PatientsComponent } from './patients/patients.component';
import { LoginComponent } from './login/login.component';

import { Routes, RouterModule } from '@angular/router';
import { ModifyInfirmierComponent } from './modify-infirmier/modify-infirmier.component';
import { ModifyPatientComponent } from './modify-patient/modify-patient.component';
import { AddInfirmierComponent } from './add-infirmier/add-infirmier.component';

const appRoutes: Routes = [  
  { path: 'login', component: LoginComponent },
  { path: 'secretary', component: SecretaryComponent },
  { path: 'infirmier', component: InfirmierComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    SecretaryComponent,
    InfirmierComponent,
    PatientsComponent,
    LoginComponent,
    ModifyInfirmierComponent,
    ModifyPatientComponent,
    AddInfirmierComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
