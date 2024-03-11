import { Component , OnInit} from '@angular/core';
import { appoinment,status } from 'src/app/Model/appoinment';
import { DoctorRepository } from 'src/app/Repository/doctor-repository';
import { CommonpropertiesService } from 'src/app/Service/commonproperties.service';
@Component({
  selector: 'app-doctor-upcomingappoinment',
  templateUrl: './doctor-upcomingappoinment.component.html',
  styleUrls: ['./doctor-upcomingappoinment.component.css']
})
export class DoctorUpcomingappoinmentComponent implements OnInit{
  constructor(private doctorRepository:DoctorRepository,public commonpropertiesService:CommonpropertiesService){}
  LoginUserName=this.commonpropertiesService.getUserName();
  LoginUserImage=this.commonpropertiesService.getImage();
  enumStatus=status;
  upcomingAppoinments: appoinment[]=[];
  historyOfAppoinment: appoinment[]=[];
  appoinment:appoinment[]=[];
  length:number=0;
  async ngOnInit(){
    await this.getUpcomingAppoinment();
    await this.getHistoryOfAppoinment();
    this.appoinment = this.upcomingAppoinments.concat(this.historyOfAppoinment);
  }
  async getUpcomingAppoinment() {
    
    try{
      this.upcomingAppoinments= await this.doctorRepository.getUpcomingAppoinment(this.LoginUserName);
      this.length=this.upcomingAppoinments.length;
      this.upcomingAppoinments.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
    }catch(error){
      console.log(error);
    }
  }
  async getHistoryOfAppoinment() {
    try{
      this.historyOfAppoinment = await this.doctorRepository.getHistoryOfAppoinment(this.LoginUserName);
      this.historyOfAppoinment.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
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
