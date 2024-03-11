import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { patient } from 'src/app/Model/patient';
import { PatientRepository } from 'src/app/Repository/patient-repository';
import { CommonpropertiesService } from 'src/app/Service/commonproperties.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-updatepatientdetails',
  templateUrl: './patient-updatepatientdetails.component.html',
  styleUrls: ['./patient-updatepatientdetails.component.css']
})

export class PatientUpdatepatientdetailsComponent implements OnInit {

  constructor(
    private patientRepository: PatientRepository,
    private formBuilder: FormBuilder,
    private commonpropertiesService: CommonpropertiesService,
    private router: Router) { }

  isImageSaved: boolean = false;
  cardImageBase64: string = '';
  patients: patient[] = [];
  LoginUserName = this.commonpropertiesService.getUserName();
  LoginUserImage = this.commonpropertiesService.getImage();

  ngOnInit() {
    this.getpatientById();
  }

  updatepatientForm: FormGroup = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
    name: ['', Validators.required],
    height: ['', Validators.required],
    weight: ['', Validators.required],
    phoneNumber: ['', [Validators.required, this.commonpropertiesService.PhoneNumberValidator()]],
    address: ['', Validators.required],
    image: [this.cardImageBase64, Validators.required],
    updatedBy: [this.LoginUserName],
  });

  async getpatientById() {
    try {
      this.patients = await this.patientRepository.getpatientById(this.LoginUserName);
      if (this.patients.length > 0) {
        this.updatepatientForm.patchValue(this.patients[0]);
        this.cardImageBase64 = this.patients[0].image;
        this.isImageSaved = true;
      }
    } catch (error) {
      console.error('Error fetching patient details', error);
    }
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
      if (response) {
        alert('Update Successful');
        console.log('Successful', response);
        this.router.navigate(['patient-update-patient']);
      }
    } catch (error) {
      console.log('Unsuccessful', error);
    }
  }

  onSubmit() {
    if (this.updatepatientForm.valid) {
      const formData = this.updatepatientForm.value as patient;
      this.putPatientDetails(formData);
      console.log(formData);
    }
  }

}
