
import { Component, OnInit, ChangeDetectorRef, numberAttribute } from '@angular/core';
import { appoinment, status } from 'src/app/Model/appoinment';
import { DoctorRepository } from 'src/app/Repository/doctor-repository';
import { CommonpropertiesService } from 'src/app/Service/commonproperties.service';
import { MatDialog } from '@angular/material/dialog';
import { DoctorUpdateappoinmentstatusComponent } from '../doctor-updateappoinmentstatus/doctor-updateappoinmentstatus.component';
@Component({
  selector: 'app-doctor-viewallappoinment',
  templateUrl: './doctor-viewallappoinment.component.html',
  styleUrls: ['./doctor-viewallappoinment.component.css']
})
export class DoctorViewallappoinmentComponent {
  constructor(private doctorRepository: DoctorRepository, 
    public commonpropertiesService: CommonpropertiesService, 
    private pagechanges: ChangeDetectorRef,
    private matDialog:MatDialog) { }

  LoginUserName=this.commonpropertiesService.getUserName();
  LoginUserImage=this.commonpropertiesService.getImage();
  enumStatus = status;
  appoinments: appoinment[] = [];
  ngOnInit(): void {
    this.getAppoinmentStatus();
  }
  async getAppoinmentStatus() {
    try{
      this.appoinments = await this.doctorRepository.getAppoinmentStatus(this.LoginUserName);
      this.appoinments.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
    }catch(error){
      console.log("Error on fetching appointments: ",error);
    }
  }
  openEditAppoinmentDialog(id:number):void {
    const dialogRef = this.matDialog.open(DoctorUpdateappoinmentstatusComponent, {
      maxHeight: '80vh',
      data: {id:id},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.getAppoinmentStatus();
    });
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
