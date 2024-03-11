import { Component } from '@angular/core';
import { CommonpropertiesService } from 'src/app/Service/commonproperties.service';
import { DoctorRepository } from 'src/app/Repository/doctor-repository';
import { appoinment } from 'src/app/Model/appoinment';
@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent {
  constructor(
    private commonpropertiesService:CommonpropertiesService,
    private doctorRepository:DoctorRepository
    ){}
  LoginUserName=this.commonpropertiesService.getUserName();
  LoginUserImage=this.commonpropertiesService.getImage();
  todayAppoinment:appoinment[]=[];
  upcomingAppoinment:appoinment[]=[];
  historyOfAppoinment:appoinment[]=[];

  ngOnInit(){
    this.getTodayAppoinment();
    this.getUpcomingAppoinment();
    this.getHistoryOfAppoinment();
  }
  async getTodayAppoinment(){
    this.todayAppoinment=await this.doctorRepository.getTodayAppoinment(this.LoginUserName);
  }
  async getUpcomingAppoinment(){
    this.upcomingAppoinment=await this.doctorRepository.getUpcomingAppoinment(this.LoginUserName);
  }
  async getHistoryOfAppoinment(){
    this.historyOfAppoinment=await this.doctorRepository.getHistoryOfAppoinment(this.LoginUserName);
  }
}
