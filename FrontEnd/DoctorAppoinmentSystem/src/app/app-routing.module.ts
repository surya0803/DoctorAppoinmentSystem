import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Login/login/login.component';
import { DoctorlistComponent } from './Components/Admin/admin-doctorlist/doctorlist.component';
import { AdminPatientlistComponent } from './Components/Admin/admin-patientlist/admin-patientlist.component';
import { AdminAdddoctorComponent } from './Components/Admin/admin-adddoctor/admin-adddoctor.component';
import { AdminViewappoinmentComponent } from './Components/Admin/admin-viewappoinment/admin-viewappoinment.component';
import { AdminDashboardComponent } from './Components/Admin/admin-dashboard/admin-dashboard/admin-dashboard.component';
import { PatientRegisterpatientComponent } from './Components/Patient/patient-registerpatient/patient-registerpatient.component';
import { PatientBookappoinmentComponent } from './Components/Patient/patient-bookappoinment/patient-bookappoinment.component';
import { PatientUpdatepatientdetailsComponent } from './Components/Patient/patient-updatepatientdetails/patient-updatepatientdetails.component';
import { PatientDashboardComponent } from './Components/Patient/patient-dashboard/patient-dashboard/patient-dashboard.component';
import { DoctorDashboardComponent } from './Components/Doctor/doctor-dashboard/doctor-dashboard/doctor-dashboard.component';
import { DoctorTodayappoinmentComponent } from './Components/Doctor/doctor-todayappoinment/doctor-todayappoinment.component';
import { DoctorUpcomingappoinmentComponent } from './Components/Doctor/doctor-upcomingappoinment/doctor-upcomingappoinment.component';
import { DoctorUpdateavailabilityComponent } from './Components/Doctor/doctor-updateavailability/doctor-updateavailability.component';
import { DoctorUpdatedoctordetailsComponent } from './Components/Doctor/doctor-updatedoctordetails/doctor-updatedoctordetails.component';
import { DoctorViewallappoinmentComponent } from './Components/Doctor/doctor-viewallappoinment/doctor-viewallappoinment.component';
import { PatientViewappoinmentstatusComponent } from './Components/Patient/patient-viewappoinmentstatus/patient-viewappoinmentstatus.component';
import { AdminEditdoctorComponent } from './Components/Admin/admin-editdoctor/admin-editdoctor.component';
import { AdminEditpatientComponent } from './Components/Admin/admin-editpatient/admin-editpatient.component';
import { AdminNavbarComponent } from './Components/Admin/admin-navbar/admin-navbar.component';
import { PatientNavbarComponent } from './Components/Patient/patient-navbar/patient-navbar.component';
import { DoctorNavbarComponent } from './Components/Doctor/doctor-navbar/doctor-navbar.component';
const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login',component:LoginComponent},
  { path: 'admin-dashboard',component:AdminDashboardComponent},
  { path: 'patient-dashboard',component:PatientDashboardComponent},
  { path: 'doctor-dashboard',component:DoctorDashboardComponent},
  { path: 'admin-view-all-doctor', component: DoctorlistComponent },
  { path: 'admin-view-all-patient', component: AdminPatientlistComponent },
  { path: 'admin-view-all-appoinment', component: AdminViewappoinmentComponent },
  { path: 'admin-add-doctor', component: AdminAdddoctorComponent },
  { path: 'admin-edit-patient', component: AdminEditpatientComponent},
  { path: 'admin-edit-doctor', component: AdminEditdoctorComponent},
  { path: 'patient-register',component: PatientRegisterpatientComponent},
  { path: 'patient-update-patient',component:PatientUpdatepatientdetailsComponent},
  { path: 'patient-book-appoinment',component:PatientBookappoinmentComponent},
  { path: 'patient-view-appoinmentstatus',component:PatientViewappoinmentstatusComponent},
  { path: 'doctor-update-doctor',component:DoctorUpdatedoctordetailsComponent},
  { path: 'doctor-view-todayappoinment',component:DoctorTodayappoinmentComponent},
  { path: 'doctor-view-upcomingappoinment',component:DoctorUpcomingappoinmentComponent},
  { path: 'doctor-update-avaliability',component:DoctorUpdateavailabilityComponent},
  { path: 'doctor-update-appoinmentstatus',component:DoctorViewallappoinmentComponent},
  { path: 'admin-navbar',component:AdminNavbarComponent},
  { path: 'doctor-navbar',component:DoctorNavbarComponent},
  { path: 'patient-navbar',component:PatientNavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
