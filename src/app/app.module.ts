import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatButtonModule, 
  MatCheckboxModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule
} from '@angular/material';

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
import { ProfilInfComponent } from './profil-inf/profil-inf.component';


const appRoutes: Routes = [  
  { path: 'main', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'secretary', component: SecretaryComponent },
  { path: 'infirmier', component: InfirmierComponent },
  { path: 'modify-infirmier', component: ModifyInfirmierComponent },
  { path: 'profil-inf', component: ProfilInfComponent },
  { path: 'add-inf', component: AddInfirmierComponent },
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
    AddInfirmierComponent,
    ProfilInfComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
