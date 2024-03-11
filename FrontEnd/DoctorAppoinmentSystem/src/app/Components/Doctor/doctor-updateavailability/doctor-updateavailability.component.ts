import { Component, OnInit } from '@angular/core';
import { DoctorRepository } from 'src/app/Repository/doctor-repository';
import { CommonpropertiesService } from 'src/app/Service/commonproperties.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { updateDoctorAvailability } from 'src/app/Model/updateDoctorAvailability';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-doctor-updateavailability',
  templateUrl: './doctor-updateavailability.component.html',
  styleUrls: ['./doctor-updateavailability.component.css'],
  providers: [DatePipe],
})
export class DoctorUpdateavailabilityComponent implements OnInit {
  constructor(
    private doctorRepository: DoctorRepository,
    private commonpropertiesService: CommonpropertiesService,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private router:Router
  ) { }
  appoinment: updateDoctorAvailability[] = [];
  ngOnInit(): void {
  }
  LoginUserName = this.commonpropertiesService.getUserName();
  LoginUserImage = this.commonpropertiesService.getImage();
  username = this.commonpropertiesService.getUserName();
  bookappoinmentForm: FormGroup = this.formBuilder.group({
    doctorName: [this.commonpropertiesService.getUserName(), Validators.required],
    date: ['', Validators.required],
    startTime: ['', Validators.required],
    endTime: ['', Validators.required],
  });

  async onSubmit() {
    try {
      if (this.bookappoinmentForm.valid) {
        const formData = this.bookappoinmentForm.value as updateDoctorAvailability;
        const newDate = new Date();
        formData.startTime = this.datePipe.transform(newDate.toDateString() + ' ' + formData.startTime, 'yyyy-MM-ddTHH:mm:ss') + 'Z';
        formData.endTime = this.datePipe.transform(newDate.toDateString() + ' ' + formData.endTime, 'yyyy-MM-ddTHH:mm:ss') + 'Z';
        console.log(formData);
        const response=await this.doctorRepository.putDoctorAvailability(formData);
        if(response){
          alert("Update Successfull");
          this.router.navigate(['doctor-dashboard']);
        }else{
          alert("Update Unsuccessfull")
        }
      }
    }
    catch (error) {
      console.log(error);
    }
  }

}
