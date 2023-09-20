import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdddoctorComponent } from './adddoctor/adddoctor.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { LoginComponent } from './login/login.component';
import { DoctorNewComponent } from './doctor-new/doctor-new.component';
import { DoctorviewuserComponent } from './doctorviewuser/doctorviewuser.component';
import { OpticketComponent } from './opticket/opticket.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { SignupComponent } from './signup/signup.component';
import { ContactsComponent } from './contacts/contacts.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'doctor', component: AdddoctorComponent },
  { path: 'doctorProfile/:dr_name', component: DoctorProfileComponent },
  { path: 'newdoctor', component: DoctorNewComponent },
  { path: 'doctorviewuser/:dr_name',component: DoctorviewuserComponent},
  { path: 'opticketbooking/:dr_name',component:OpticketComponent},
  { path: 'appointment',component:AppointmentComponent},
  { path: 'signIn',component:SignupComponent},
  { path: 'contactus',component:ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
