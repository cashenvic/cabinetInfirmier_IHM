import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from "@angular/flex-layout";
import {CdkTableModule} from '@angular/cdk/table';
import {   
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { SecretaryComponent } from './secretary/secretary.component';
import { InfirmierComponent } from './infirmier/infirmier.component';
import { LoginComponent } from './login/login.component';
import { ModifyInfirmierComponent } from './modify-infirmier/modify-infirmier.component';
import { ModifyPatientComponent } from './modify-patient/modify-patient.component';
import { AddInfirmierComponent } from './add-infirmier/add-infirmier.component';
import { ProfilInfComponent } from './profil-inf/profil-inf.component';


import { Routes, RouterModule } from '@angular/router';
import { LogSComponent } from './login/log-s/log-s.component';
import { LogIComponent } from './login/log-i/log-i.component';
const appRoutes: Routes = [  
  { path: 'main', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'log-i', component: LogIComponent },
  { path: 'log-s', component: LogSComponent },
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
    LoginComponent,
    ModifyInfirmierComponent,
    ModifyPatientComponent,
    AddInfirmierComponent,
    ProfilInfComponent,
    LogSComponent,
    LogIComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,

    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,

    FlexLayoutModule,
    CdkTableModule
  ],
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
