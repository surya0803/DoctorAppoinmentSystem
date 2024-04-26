import { Component, OnInit,Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { patient } from 'src/app/Model/patient';
import { PatientRepository } from 'src/app/Repository/patient-repository';
import { CommonpropertiesService } from 'src/app/Service/commonproperties.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-editpatient',
  templateUrl: './admin-editpatient.component.html',
  styleUrls: ['./admin-editpatient.component.css']
})

export class AdminEditpatientComponent{
  constructor(
    private patientRepository: PatientRepository, 
    private formBuilder: FormBuilder, 
    private commonpropertiesService: CommonpropertiesService,
    public matDialogRef: MatDialogRef<AdminEditpatientComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: { patient:patient }
    ) { }
    
  isImageSaved: boolean = false;
  cardImageBase64: string = '';
  patients: patient[] = [];
  LoginUserName=this.commonpropertiesService.getUserName();
  LoginUserImage=this.commonpropertiesService.getImage();

  ngOnInit() {
    if(this.data.patient){
      console.log(this.data.patient);
      this.initializeForm(this.data.patient);
    }
  }

  updatepatientForm: FormGroup = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
    name: ['',Validators.required],
    height: ['', Validators.required],
    weight: ['', Validators.required],
    phoneNumber: ['', [Validators.required, this.commonpropertiesService.PhoneNumberValidator()]],
    address: ['', Validators.required],
    image: [this.cardImageBase64,Validators.required],
    updatedBy: [this.LoginUserName],
  });

  private initializeForm(patient:patient):void{
    this.updatepatientForm.patchValue({
      userName: patient.userName,
      password: patient.password,
      name: patient.name,
      height: patient.height,
      weight: patient.weight,
      phoneNumber: patient.phoneNumber,
      address: patient.address,
      image: patient.image,
      updatedBy: this.LoginUserName,
    })
    this.cardImageBase64=patient.image;
    this.isImageSaved=true;
  }

  CreateBase64String(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const imgBase64Path = e.target.result;
        this.cardImageBase64 = imgBase64Path;
        this.isImageSaved = true;
        this.updatepatientForm.patchValue({
          image: imgBase64Path,
        });
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  async putPatientDetails(patient: patient): Promise<void> {
    try {
      const response = await this.patientRepository.putpatientDetails(patient);
      if(response){
        alert('Updated '+patient.name);
        console.log('Successful', response);
      }else{
        console.log("Can't update"+patient.name);
      }
    } catch (error) {
      console.log('Unsuccessful', error);
    }
  }

  onSubmit() {
    if (this.updatepatientForm.valid) {
      const formData = this.updatepatientForm.value as patient;
      try{
        this.putPatientDetails(formData);
        this.matDialogRef.close(formData);
      }catch(error){
        console.log(error);
      } 
    }
  }
}
