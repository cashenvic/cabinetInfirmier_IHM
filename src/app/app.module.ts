import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from "@angular/flex-layout";
import {CdkTableModule} from '@angular/cdk/table';
import {DatePipe} from '@angular/common';
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

import {AppComponent} from './app.component';
import {SecretaryComponent} from './secretary/secretary.component';
import {InfirmierComponent} from './infirmier/infirmier.component';
import {LoginComponent} from './login/login.component';
import {ModifyInfirmierComponent} from './modify-infirmier/modify-infirmier.component';
import {ModifyPatientComponent} from './modify-patient/modify-patient.component';


import {RouterModule, Routes} from '@angular/router';
import {LogSComponent} from './login/log-s/log-s.component';
import {LogIComponent} from './login/log-i/log-i.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {PatientAddFormComponent} from './patient-add-form/patient-add-form.component';
import {PatientAffectDialogComponent} from './patient-affect-dialog/patient-affect-dialog.component';
import {CoutSoinsComponent} from './cout-soins/cout-soins.component';
import {FooterComponent} from './footer/footer.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'infirmierlog', component: LogIComponent },
  { path: 'secretairelog', component: LogSComponent },
  { path: 'secretaire', component: SecretaryComponent },
  { path: 'infirmier/:id', component: InfirmierComponent },
  { path: '', component: LoginComponent },
  { path: 'not-found', component: NotFoundComponent },
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
    LogSComponent,
    LogIComponent,
      NotFoundComponent,
      PatientAddFormComponent,
      PatientAffectDialogComponent,
      CoutSoinsComponent,
      FooterComponent,
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
    entryComponents: [PatientAddFormComponent, PatientAffectDialogComponent, CoutSoinsComponent],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
