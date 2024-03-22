import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,AbstractControl } from '@angular/forms';
import { doctor, Gender} from 'src/app/Model/doctor';
import { AdminRepository } from 'src/app/Repository/admin-repository';
import { CommonpropertiesService } from 'src/app/Service/commonproperties.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-adddoctor',
  templateUrl: './admin-adddoctor.component.html',
  styleUrls: ['./admin-adddoctor.component.css']
})

export class AdminAdddoctorComponent implements OnInit{
  constructor(
    private adminRepository: AdminRepository, 
    private formBuilder:FormBuilder,
    private router:Router,
    private commonpropertiesService:CommonpropertiesService) {}
  LoginUserName=this.commonpropertiesService.getUserName();
  LoginUserImage=this.commonpropertiesService.getImage();
  enumGender=Gender;
  isImageSaved: boolean = false;
  cardImageBase64: string = this.commonpropertiesService.image;
  UserName!:string;
  ngOnInit() {
  }
     adddoctorForm: FormGroup = this.formBuilder.group({
      hospitalId:['1'],
      userName: ['', Validators.required],
      password: ['', [Validators.required,this.commonpropertiesService.passwordValidator()]],
      name: ['', [Validators.required,this.commonpropertiesService.nameValidator()]],
      dob: ['', [Validators.required,this.commonpropertiesService.dobValidator()]],
      gender: ['',Validators.required],
      phoneNumber: ['', [Validators.required,this.commonpropertiesService.PhoneNumberValidator()]],
      address: ['', Validators.required],
      specialization: ['', Validators.required],
      experience: [0, Validators.required],
      image: [this.cardImageBase64],
      createdBy: [this.LoginUserName],
      updatedBy: [this.LoginUserName],
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
  
  async postAddDoctor(doctor: doctor): Promise<void> {
    try {
      const response = await this.adminRepository.postAddDoctor(doctor);
      if(response){
        alert('Added '+doctor.name);
        this.router.navigate(['admin-dashboard']);
      }else{
        alert("Cant't add "+doctor.name);
      }
    } catch (error) {
      console.error('Error adding doctor:', error);
    }
  }

  onSubmit(){
    if (this.adddoctorForm.valid) {
      const formData = this.adddoctorForm.value as doctor;
      formData.hospitalId = 1;
      this.postAddDoctor(formData);
      console.log(formData);
    }
  }

  async checkUserNameExists() {
    const userNameValue = this.adddoctorForm.get('userName')?.value;
    const response = await this.adminRepository.getUserName(userNameValue);
      if (response[0].userName.toLocaleLowerCase() === userNameValue.toLocaleLowerCase()) {
        this.adddoctorForm.get('userName')?.setErrors({ 'userNameExists': true });
      } else {
        this.adddoctorForm.get('userName')?.setErrors(null);
      }
  }
}
