
import { Component, OnInit, Inject} from '@angular/core';
import { appoinment, status } from 'src/app/Model/appoinment';
import { DoctorRepository } from 'src/app/Repository/doctor-repository';
import { CommonpropertiesService } from 'src/app/Service/commonproperties.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-doctor-updateappoinmentstatus',
  templateUrl: './doctor-updateappoinmentstatus.component.html',
  styleUrls: ['./doctor-updateappoinmentstatus.component.css']
})
export class DoctorUpdateappoinmentstatusComponent {

  LoginUserName=this.commonpropertiesService.getUserName();
  LoginUserImage=this.commonpropertiesService.getImage();
  enumStatus = status;
  Id: any;
  status: any;
  appoinments: appoinment[] = [];
  username: string = this.commonpropertiesService.getUserName().toString();

  constructor(private doctorRepository: DoctorRepository, 
    public commonpropertiesService: CommonpropertiesService,
    public matDialogRef: MatDialogRef<DoctorUpdateappoinmentstatusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id:number }
    ) { }

    ngOnInit(){
      if(this.data.id){
        this.Id=this.data.id;
      }
    }

  async onSubmit() {
    try {
      const response=await this.doctorRepository.putAppoinmentStatus(this.Id, this.status);
      if(response){
        this.matDialogRef.close(this.Id);
        alert('Update Successfull');
      }else{
        alert('Update Unsuccessful');
      }
    } catch (error) {
      console.error('Error updating appointment status:', error);
    }
  }
}
