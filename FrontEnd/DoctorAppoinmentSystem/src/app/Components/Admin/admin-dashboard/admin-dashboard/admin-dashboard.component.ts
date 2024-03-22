import { Component,OnInit } from '@angular/core';
import { CommonpropertiesService } from 'src/app/Service/commonproperties.service';
import { AdminRepository } from 'src/app/Repository/admin-repository';
import { patient } from 'src/app/Model/patient';
import { doctor } from 'src/app/Model/doctor';
import { appoinment } from 'src/app/Model/appoinment';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  constructor(private commonpropertiesService:CommonpropertiesService,private adminRepository:AdminRepository){}
  LoginUserName=this.commonpropertiesService.getUserName();
  LoginUserImage=this.commonpropertiesService.getImage();
  patients:patient[]=[];
  doctors:doctor[]=[];
  appoinments:appoinment[]=[];
  ngOnInit(){
    this.getAllDoctor();
    this.getAllPatient();
    this.getAllAppoinment();
  }
  async getAllPatient() {
    this.patients=await this.adminRepository.GetAllPatient();
    console.log("api",await this.adminRepository.getDistrict());
   }
   async getAllDoctor() {
    this.doctors=await this.adminRepository.getAllDoctor();
   }
   async getAllAppoinment() {
    this.appoinments=await this.adminRepository.getAllAppoinment();
   }
}
