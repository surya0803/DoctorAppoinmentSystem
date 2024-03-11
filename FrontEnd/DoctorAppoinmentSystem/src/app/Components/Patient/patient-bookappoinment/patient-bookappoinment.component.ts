import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { doctor } from 'src/app/Model/doctor';
import { appoinment, status } from 'src/app/Model/appoinment';
import { PatientRepository } from 'src/app/Repository/patient-repository';
import { CommonpropertiesService } from 'src/app/Service/commonproperties.service';
import { timeslot } from 'src/app/Model/timslot';
import { bookappoinment } from 'src/app/Model/BookAppoinment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-patient-bookappoinment',
  templateUrl: './patient-bookappoinment.component.html',
  styleUrls: ['./patient-bookappoinment.component.css']
})
export class PatientBookappoinmentComponent implements OnInit {
  constructor(
    private patientRepository: PatientRepository, 
    private formBuilder: FormBuilder, 
    public commonpropertiesService: CommonpropertiesService,
    private router:Router) { }
  ngOnInit(): void {
    this.getDoctorSpecialization();
  }
  LoginUserName=this.commonpropertiesService.getUserName();
  LoginUserImage=this.commonpropertiesService.getImage();
  LoginId=this.commonpropertiesService.getId();
  doctors: doctor[] = [];
  timeslots: timeslot[] = [];
  enumStatus = status;
  bookappoinmentForm: FormGroup = this.formBuilder.group({
    patientId: [this.commonpropertiesService.getId(), Validators.required],
    doctorId: ['', Validators.required],
    purpose: ['', Validators.required],
    description: ['', Validators.required],
    date: ['', Validators.required],
    timeSlotId: ['',Validators.required],
    status: [this.enumStatus['NotYetApproved'], Validators.required],
  });

  async getDoctorSpecialization() {
    try{
    this.doctors = await this.patientRepository.getDoctorSpecialization();
    }catch(error){
      console.log(error);
    }
  }

  onDoctorSelected() {
    const selectedDoctor = this.bookappoinmentForm.get('doctorId')?.value;
    const selectedDate = this.bookappoinmentForm.get('date')?.value;
    console.log('Selected Doctor:', selectedDoctor);
    console.log('Selected Date:', selectedDate);
    if (selectedDoctor && selectedDate) {
      this.getTimeSlot(this.LoginId,selectedDoctor, selectedDate);
    }
  }

  async getTimeSlot(PatientId:number,DoctorId: number, date: Date = new Date()) {
    try{
      this.timeslots = await this.patientRepository.getTimeSlot(PatientId,DoctorId, date);
    }catch(error){
      console.log(error);
    }
  }
  async postBookAppoinment(appoinments: bookappoinment): Promise<void> {
    try {
      const response = await this.patientRepository.postBookAppoinment(appoinments);
      if(response){
        alert('Appoinment booked successfull');
        console.log('Successful', response);
        this.router.navigate(['patient-book-appoinment']);
      }
    } catch (error) {
      console.log('Unsuccessful', error);
    }
  }

  onSubmit() {
    if (this.bookappoinmentForm.valid) {
      const formData = this.bookappoinmentForm.value as bookappoinment;
      this.postBookAppoinment(formData);
      console.log(formData);
    }else{
      console.log("error on booking appoinment");
    }
  }

  onStartTimeSelected() {
    const selectedStartTime = this.bookappoinmentForm.get('startTime')?.value;
    const selectedTimeSlot = this.timeslots.find(item => item.startTime === selectedStartTime);
    if (selectedTimeSlot) {
      this.bookappoinmentForm.patchValue({
        endTime: selectedTimeSlot.endTime
      });
    } else {
      console.warn('No matching time slot found for the selected start time:', selectedStartTime);
    }
  }
}
