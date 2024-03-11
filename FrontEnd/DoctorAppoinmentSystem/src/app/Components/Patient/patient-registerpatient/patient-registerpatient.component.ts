import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { patient, Gender,BloodGroup } from 'src/app/Model/patient';
import { PatientRepository } from 'src/app/Repository/patient-repository';
import { Router } from '@angular/router';
import { CommonpropertiesService } from 'src/app/Service/commonproperties.service';
import { AdminRepository } from 'src/app/Repository/admin-repository';
@Component({
  selector: 'app-patient-registerpatient',
  templateUrl: './patient-registerpatient.component.html',
  styleUrls: ['./patient-registerpatient.component.css']
})
export class PatientRegisterpatientComponent {
  constructor(
    private patientRepository: PatientRepository, 
    private formBuilder:FormBuilder,
    private router:Router,
    private commmonServiceProperties:CommonpropertiesService,
    private adminRepository:AdminRepository) {}
  username:string="username";
  enumGender=Gender;
  enumbloodgroup=BloodGroup;
  isImageSaved: boolean = false;
  cardImageBase64: string = this.commmonServiceProperties.image;
  UserName:string[]=[];
  ngOnInit() {
  }
      addpatientForm: FormGroup = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required,this.commmonServiceProperties.passwordValidator()]],
      name: ['', [Validators.required,this.commmonServiceProperties.nameValidator()]],
      bloodgroup: ['', Validators.required],
      gender: ['', Validators.required],
      height: ['',Validators.required],
      weight: ['',Validators.required],
      dob: ['', [Validators.required,this.commmonServiceProperties.dobValidator()]],
      phoneNumber: ['', [Validators.required,this.commmonServiceProperties.PhoneNumberValidator()]],
      address: ['', Validators.required],
      image: [this.cardImageBase64],
      createdBy: [this.username],
      updatedBy: [this.username],
    });
  CreateBase64String(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const imgBase64Path = e.target.result;
        this.cardImageBase64 = imgBase64Path;
        this.isImageSaved = true;
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }
  
  async postRegisterPatient(patient: patient): Promise<void> {
    try {
      const response = await this.patientRepository.postRegisterPatient(patient);
      if(response){
        alert('Registration Successful');
        console.log('Successful', response);
        this.router.navigate(['login']);
      }else{
        console.log('Unsuccessful');
      }
    } catch (error) {
      console.log('Unsuccessful', error);
    }
  }

  onSubmit(){
    if (this.addpatientForm.valid) {
      const formData = this.addpatientForm.value as patient;
      formData.createdBy=formData.userName;
      formData.updatedBy=formData.userName;
      this.postRegisterPatient(formData);
      console.log(formData);
    }
  }

  async checkUserNameExists() {
      const userNameValue = this.addpatientForm.get('userName')?.value;
      const response = await this.adminRepository.getUserName(userNameValue);
        if (response[0].userName.toLocaleLowerCase() === userNameValue.toLocaleLowerCase()) {
          this.addpatientForm.get('userName')?.setErrors({ 'userNameExists': true });
        } else {
          this.addpatientForm.get('userName')?.setErrors(null);
        }
    }
  }
