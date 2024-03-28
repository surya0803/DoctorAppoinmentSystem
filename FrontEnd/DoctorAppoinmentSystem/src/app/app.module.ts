import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './Components/Admin/admin-dashboard/admin-dashboard/admin-dashboard.component';
import { PatientDashboardComponent } from './Components/Patient/patient-dashboard/patient-dashboard/patient-dashboard.component';
import { DoctorDashboardComponent } from './Components/Doctor/doctor-dashboard/doctor-dashboard/doctor-dashboard.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminPatientlistComponent } from './Components/Admin/admin-patientlist/admin-patientlist.component';
import { AdminAdddoctorComponent } from './Components/Admin/admin-adddoctor/admin-adddoctor.component';
import { AdminViewappoinmentComponent } from './Components/Admin/admin-viewappoinment/admin-viewappoinment.component';
import { DoctorlistComponent } from './Components/Admin/admin-doctorlist/doctorlist.component';
import { LoginComponent } from './Components/Login/login/login.component';
import { DoctorUpdatedoctordetailsComponent } from './Components/Doctor/doctor-updatedoctordetails/doctor-updatedoctordetails.component';
import { DoctorTodayappoinmentComponent } from './Components/Doctor/doctor-todayappoinment/doctor-todayappoinment.component';
import { DoctorUpcomingappoinmentComponent } from './Components/Doctor/doctor-upcomingappoinment/doctor-upcomingappoinment.component';
import { DoctorUpdateavailabilityComponent } from './Components/Doctor/doctor-updateavailability/doctor-updateavailability.component';
import { PatientRegisterpatientComponent } from './Components/Patient/patient-registerpatient/patient-registerpatient.component';
import { PatientUpdatepatientdetailsComponent } from './Components/Patient/patient-updatepatientdetails/patient-updatepatientdetails.component';
import { PatientBookappoinmentComponent } from './Components/Patient/patient-bookappoinment/patient-bookappoinment.component';
import { PatientViewappoinmentstatusComponent } from './Components/Patient/patient-viewappoinmentstatus/patient-viewappoinmentstatus.component';
import { DaysAgoPipe } from './days-ago.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from '@angular/material/dialog';
import { AdminEditpatientComponent } from './Components/Admin/admin-editpatient/admin-editpatient.component';
import { AdminEditdoctorComponent } from './Components/Admin/admin-editdoctor/admin-editdoctor.component';
import { DoctorUpdateappoinmentstatusComponent } from './Components/Doctor/doctor-updateappoinmentstatus/doctor-updateappoinmentstatus.component';
import { DoctorViewallappoinmentComponent } from './Components/Doctor/doctor-viewallappoinment/doctor-viewallappoinment.component';
import { AdminNavbarComponent } from './Components/Admin/admin-navbar/admin-navbar.component';
import { DoctorNavbarComponent } from './Components/Doctor/doctor-navbar/doctor-navbar.component';
import { PatientNavbarComponent } from './Components/Patient/patient-navbar/patient-navbar.component';
import { CommonpropertiesService } from './Service/commonproperties.service';
import { AdminAddHospitalComponent } from './Components/Admin/admin-add-hospital/admin-add-hospital.component';
import { LocalStorageService } from './Service/local-storage.service';
import { AdminHospitalLIstComponent } from './Components/Admin/admin-hospital-list/admin-hospital-list.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    PatientDashboardComponent,
    DoctorDashboardComponent,
    AdminPatientlistComponent,
    AdminAdddoctorComponent,
    AdminViewappoinmentComponent,
    DoctorlistComponent,
    LoginComponent,
    DoctorUpdatedoctordetailsComponent,
    DoctorTodayappoinmentComponent,
    DoctorUpcomingappoinmentComponent,
    DoctorUpdateavailabilityComponent,
    PatientRegisterpatientComponent,
    PatientUpdatepatientdetailsComponent,
    PatientBookappoinmentComponent,
    PatientViewappoinmentstatusComponent,
    DaysAgoPipe,
    AdminEditpatientComponent,
    AdminEditdoctorComponent,
    DoctorUpdateappoinmentstatusComponent,
    DoctorViewallappoinmentComponent,
    AdminNavbarComponent,
    DoctorNavbarComponent,
    PatientNavbarComponent,
    AdminAddHospitalComponent,
    AdminHospitalLIstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
    CommonpropertiesService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
