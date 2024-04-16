import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorRepository } from 'src/app/Repository/doctor-repository';
import { CommonpropertiesService } from 'src/app/Service/commonproperties.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { doctor } from 'src/app/Model/doctor';

@Component({
  selector: 'app-admin-editdoctor',
  templateUrl: './admin-editdoctor.component.html',
  styleUrls: ['./admin-editdoctor.component.css']
})
export class AdminEditdoctorComponent implements OnInit {
  
  LoginUserName = this.commonpropertiesService.getUserName();
  LoginUserImage = this.commonpropertiesService.getImage();
  username: string = this.commonpropertiesService.getUserName();
  isImageSaved: boolean = false;
  cardImageBase64: string = '';
  doctors: doctor[] = [];

  constructor(
    private doctorRepository: DoctorRepository,
    private formBuilder: FormBuilder,
    private commonpropertiesService: CommonpropertiesService,
    public matDialogRef: MatDialogRef<AdminEditdoctorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { doctor: doctor }
  ) { }

  ngOnInit() {
    if (this.data.doctor) {
      this.initializeForm(this.data.doctor);
    }
  }

  updateDoctorForm: FormGroup = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
    name: ['', [Validators.required, this.commonpropertiesService.nameValidator()]],
    phoneNumber: ['', [Validators.required, this.commonpropertiesService.PhoneNumberValidator()]],
    address: ['', Validators.required],
    specialization: ['', Validators.required],
    experience: [0, Validators.required],
    image: [this.cardImageBase64, Validators.required],
    updatedBy: [this.username],
  });

  private initializeForm(doctor: doctor): void {
    this.updateDoctorForm.patchValue({
      userName: doctor.userName,
      password: doctor.password,
      name: doctor.name,
      phoneNumber: doctor.phoneNumber,
      address: doctor.address,
      specialization: doctor.specialization,
      experience: doctor.experience,
      image: doctor.image,
      updatedBy: this.username,
    });
    this.cardImageBase64=doctor.image;
    this.isImageSaved=true;
  }
  
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

  async putDoctor(doctor: doctor): Promise<void> {
    try {
      const response = await this.doctorRepository.putDoctor(doctor);
      if(response){
        alert('Updated '+doctor.name);
        console.log('Successful', response);
      }else{
        console.log("Can't update "+doctor.name);
      }
    } catch (error) {
      console.log('Unsuccessful', error);
    }
  }

  onSubmit() {
    if (this.updateDoctorForm.valid) {
      const formData = this.updateDoctorForm.value as doctor;
      try {
        this.putDoctor(formData);
        this.matDialogRef.close(formData);
      } catch (error) {
        console.log(error);
      }
    }
  }

}
