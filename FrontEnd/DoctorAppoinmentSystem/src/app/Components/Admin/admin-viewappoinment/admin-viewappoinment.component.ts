import { Component, OnInit } from '@angular/core';
import { appoinment,status } from 'src/app/Model/appoinment';
import { AdminRepository } from 'src/app/Repository/admin-repository';
import { CommonpropertiesService } from 'src/app/Service/commonproperties.service';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-admin-viewappoinment',
  templateUrl: './admin-viewappoinment.component.html',
  styleUrls: ['./admin-viewappoinment.component.css']
})

export class AdminViewappoinmentComponent implements OnInit{
appoinments:appoinment[]=[];
filterappoinment:appoinment[]=[];
enumStatus=status;
LoginUserName=this.commonpropertiesService.getUserName();
LoginUserImage=this.commonpropertiesService.getImage();

constructor(
  private adminRepository:AdminRepository, 
  public commonpropertiesService: CommonpropertiesService,
  private formBuilder:FormBuilder){}

ngOnInit():void{
  this.getAllAppoinment();
}

async getAllAppoinment(){
  try{
    this.appoinments = await this.adminRepository.getAllAppoinment();
    this.filterappoinment = this.appoinments.slice(); // Make a copy to avoid modifying the original array
    this.filterappoinment.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch(error){
    console.log(error);
  }
}

filterAppoinmentForm: FormGroup = this.formBuilder.group({
  patientName: [''],
  doctorName: [''],
  date: [''],
  status: [''],
});

filterAppoinment() {
  const filterValues = this.filterAppoinmentForm.value;
  const filteredAppointments = this.appoinments.filter(appointment => {
    const filterdate=new Date(filterValues.date);
    var temp1=new Date(appointment.date);
    const temp2=temp1.toISOString().split('T')[0];
    temp1=new Date(temp2);
    temp1.setDate(temp1.getDate()+1);
    console.log(temp1.getDate(),filterdate.getDate());
    return (
      (filterValues.patientName === '' || appointment.patientName.includes(filterValues.patientName)) &&
      (filterValues.doctorName === '' || appointment.doctorName.includes(filterValues.doctorName)) &&
      (filterValues.date === '' || temp1.getDate() === filterdate.getDate()) &&
      (filterValues.status === '' || appointment.status.toString() === filterValues.status)
    );
  });
  this.filterappoinment = filteredAppointments;
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