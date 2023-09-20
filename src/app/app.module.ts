import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AdddoctorComponent } from './adddoctor/adddoctor.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorNewComponent } from './doctor-new/doctor-new.component';
import { DoctorviewuserComponent } from './doctorviewuser/doctorviewuser.component';
import { OpticketComponent } from './opticket/opticket.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { SearchPipe } from './pipe/search.pipe';
import { DatePipe } from '@angular/common';
import { DatesotePipe } from './pipe/datesote.pipe';
import { SignupComponent } from './signup/signup.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AdddoctorComponent,
    DoctorProfileComponent,
    LoginComponent,
    DoctorNewComponent,
    DoctorviewuserComponent,
    OpticketComponent,
    AppointmentComponent,
    SearchPipe,
    DatesotePipe,
    SignupComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
