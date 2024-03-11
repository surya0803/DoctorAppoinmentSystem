import { Component } from '@angular/core';
import { appoinment,status } from 'src/app/Model/appoinment';
import { PatientRepository } from 'src/app/Repository/patient-repository';
import { CommonpropertiesService } from 'src/app/Service/commonproperties.service';
@Component({
  selector: 'app-patient-viewappoinmentstatus',
  templateUrl: './patient-viewappoinmentstatus.component.html',
  styleUrls: ['./patient-viewappoinmentstatus.component.css']
})
export class PatientViewappoinmentstatusComponent {
  constructor(private patientRepository:PatientRepository,public commonpropertiesService:CommonpropertiesService){}
  LoginUserName=this.commonpropertiesService.getUserName();
  LoginUserImage=this.commonpropertiesService.getImage();
  enumstatus = status;
  appoinments:appoinment[]=[];
  ngOnInit():void{
    this.getAppoinmentStatus();
  }
  async getAppoinmentStatus(){
    try{
      this.appoinments = await this.patientRepository.getAppoinmentStatus(this.LoginUserName);
      this.appoinments.sort((a, b) => {
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
