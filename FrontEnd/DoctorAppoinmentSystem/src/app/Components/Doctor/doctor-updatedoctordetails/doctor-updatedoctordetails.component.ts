import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { doctor } from 'src/app/Model/doctor';
import { DoctorRepository } from 'src/app/Repository/doctor-repository';
import { CommonpropertiesService } from 'src/app/Service/commonproperties.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-doctor-updatedoctordetails',
  templateUrl: './doctor-updatedoctordetails.component.html',
  styleUrls: ['./doctor-updatedoctordetails.component.css']
})
export class DoctorUpdatedoctordetailsComponent implements OnInit {
  constructor(
    private doctorRepository: DoctorRepository,
    private formBuilder: FormBuilder,
    private commonpropertiesService: CommonpropertiesService,
    private router:Router
  ) {}

  LoginUserName=this.commonpropertiesService.getUserName();
  LoginUserImage=this.commonpropertiesService.getImage();
  isImageSaved: boolean = false;
  cardImageBase64: string = '';
  doctors: doctor[] = [];
  
  ngOnInit() {
    this.getDoctorByUserName();
  }

  updateDoctorForm: FormGroup = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
    name: ['', [Validators.required,this.commonpropertiesService.nameValidator()]],
    phoneNumber: ['', [Validators.required,this.commonpropertiesService.PhoneNumberValidator()]],
    address: ['', Validators.required],
    specialization: ['', Validators.required],
    experience: [0, Validators.required],
    image: [this.cardImageBase64,Validators.required],
    updatedBy: [this.LoginUserName],
  });

  CreateBase64String(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const imgBase64Path = e.target.result;
        this.cardImageBase64 = imgBase64Path;
        this.isImageSaved = true;
        this.updateDoctorForm.patchValue({
          image: imgBase64Path,
        });
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  async getDoctorByUserName() {
    try {
      this.doctors = await this.doctorRepository.getDoctorByUserName(this.LoginUserName);
      if (this.doctors.length > 0) {
        this.updateDoctorForm.patchValue(this.doctors[0]);
        this.cardImageBase64=this.doctors[0].image;
        this.isImageSaved=true;
      }
    } catch (error) {
      console.log('Error getting doctor:', error);
    }
  }

  async putDoctor(doctor: doctor): Promise<void> {
    try {
      const response = await this.doctorRepository.putDoctor(doctor);
      if(response){
        alert('Update successful');
        console.log('Successful', response);
        this.router.navigate(['doctor-dashboard']);
      }else{
        alert("Can't update details");
      }
    } catch (error) {
      console.log('Unsuccessful', error);
    }
  }

  onSubmit() {
    if (this.updateDoctorForm.valid) {
      const formData = this.updateDoctorForm.value as doctor;
      this.putDoctor(formData);
      console.log(formData);
    }
  }
}
