import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { patient,Gender,BloodGroup } from 'src/app/Model/patient';
import { CommonpropertiesService } from 'src/app/Service/commonproperties.service';
import { AdminRepository } from 'src/app/Repository/admin-repository';
import { PatientRepository } from 'src/app/Repository/patient-repository';
import { MatDialog } from '@angular/material/dialog';
import { AdminEditpatientComponent } from '../admin-editpatient/admin-editpatient.component';
@Component({
  selector: 'app-admin-patientlist',
  templateUrl: './admin-patientlist.component.html',
  styleUrls: ['./admin-patientlist.component.css']
})
export class AdminPatientlistComponent implements OnInit{
  LoginUserName=this.commonpropertiesService.getUserName();
  LoginUserImage=this.commonpropertiesService.getImage();
  patients!: patient[];
  enumGender=Gender;
  enumBloodGroup=BloodGroup;
constructor(
  private adminRepository:AdminRepository, 
  private formBuilder: FormBuilder, 
  private commonpropertiesService: CommonpropertiesService,
  private patientRepository: PatientRepository,
  private matDialog:MatDialog){
}
ngOnInit():void{
  this.getAllPatient();
}

 async getAllPatient() {
  try{
    this.patients=await this.adminRepository.GetAllPatient();
    console.log(this.patients);
  }catch(error){
    console.log(error);
  }

}

openEditPatientDialog(patient:patient){
  const dialogRef=this.matDialog.open(AdminEditpatientComponent,{
    data: { patient:patient},
    height: '400px',
  width: '600px',
  });

dialogRef.afterClosed().subscribe(result=>{
  console.log(result);
  this.getAllPatient();
});
}
}

