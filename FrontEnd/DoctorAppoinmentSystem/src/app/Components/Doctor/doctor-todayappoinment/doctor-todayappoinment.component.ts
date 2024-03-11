import { Component, OnInit } from '@angular/core';
import { appoinment,status } from 'src/app/Model/appoinment';
import { DoctorRepository } from 'src/app/Repository/doctor-repository';
import { CommonpropertiesService } from 'src/app/Service/commonproperties.service';
@Component({
  selector: 'app-doctor-todayappoinment',
  templateUrl: './doctor-todayappoinment.component.html',
  styleUrls: ['./doctor-todayappoinment.component.css']
})
export class DoctorTodayappoinmentComponent implements OnInit {
  constructor(private doctorRepository:DoctorRepository,public commonpropertiesService:CommonpropertiesService){}
  ngOnInit(): void {
    this.getTodayAppoinment();
  }
  LoginUserName=this.commonpropertiesService.getUserName();
  LoginUserImage=this.commonpropertiesService.getImage();
  appoinments: appoinment[]=[];
  enumStatus=status;
  username = this.commonpropertiesService.getUserName();
  async getTodayAppoinment() {
    try{
      this.appoinments=await this.doctorRepository.getTodayAppoinment(this.username);
    }catch(error){
      console.log(error);
    }
  }
  getStatusColor(status: number): string {
    switch(status){
      case 0:
        return 'orange';
      case 1:
        return 'green';
      case 2:
        return 'red';
      default:
        return '';
    }
  }
}
