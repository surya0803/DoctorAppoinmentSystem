import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { doctor } from 'src/app/Model/doctor';
import { state } from 'src/app/Model/state';
import { timeslot } from 'src/app/Model/timslot';
import { district } from 'src/app/Model/district';
import { hospital } from 'src/app/Model/hospital';
import { appoinment, status } from 'src/app/Model/appoinment';
import { bookappoinment } from 'src/app/Model/BookAppoinment';
import { AdminRepository } from 'src/app/Repository/admin-repository';
import { PatientRepository } from 'src/app/Repository/patient-repository';
import { CommonpropertiesService } from 'src/app/Service/commonproperties.service';
@Component({
  selector: 'app-patient-bookappoinment',
  templateUrl: './patient-bookappoinment.component.html',
  styleUrls: ['./patient-bookappoinment.component.css']
})
export class PatientBookappoinmentComponent implements OnInit {
  
  constructor(
    private formBuilder: FormBuilder, 
    private adminRepository:AdminRepository,
    private patientRepository: PatientRepository, 
    public commonpropertiesService: CommonpropertiesService,
    private router:Router) { }
  
    ngOnInit(): void {
      this.getHospitalDetails('');
      this.getDoctorSpecialization();
      this.getState();
      this.filterDoctors=[];
  }

  LoginUserName=this.commonpropertiesService.getUserName();
  LoginUserImage=this.commonpropertiesService.getImage();
  LoginId=this.commonpropertiesService.getId();
  enumStatus = status;
  state!:state[];
  doctors!: doctor[];
  filterDoctors!:doctor[];
  district!:district[];
  timeslots!: timeslot[];
  hospitalDetails!:hospital[];
  filterHospitalDetails!:hospital[];
  
  bookappoinmentForm: FormGroup = this.formBuilder.group({
    patientId: [this.commonpropertiesService.getId(), Validators.required],
    doctorId: ['', Validators.required],
    purpose: ['', Validators.required],
    description: ['', Validators.required],
    date: ['', Validators.required],
    timeSlotId: ['',Validators.required],
    status: [this.enumStatus['NotYetApproved'], Validators.required],
  });

  bookappoinmentStateDistrictForm:FormGroup = this.formBuilder.group({
    state :[Validators.required],
    district:[Validators.required],
    hospital:[Validators.required]
  });

  async getHospitalDetails(username:string){
    try{
      this.hospitalDetails = await this.adminRepository.getHospitalDetails(username);
      console.log(this.hospitalDetails);
    }catch(error){
      console.log(error);
    }
  }

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

  async getState() {
    try {
      this.state = await this.adminRepository.getState();
    } catch (error) {
      console.log(error);
    }
  }

  async getDistrict(stateId: number) {
    try {
      this.district = await this.adminRepository.getDistrict(stateId);
    } catch (error) {
      console.log(error);
    }
  }

  onChangeState() {
    const selectedState = this.bookappoinmentStateDistrictForm.get('state')?.value;
    this.bookappoinmentStateDistrictForm.patchValue({
      district:''
    });
    this.getDistrict(selectedState);
  }

  onChangeDistrict() {
    const selectedState = this.bookappoinmentStateDistrictForm.get('state')?.value;
    const selectedDistrict = this.bookappoinmentStateDistrictForm.get('district')?.value;

    if (selectedState && selectedDistrict) {
        this.filterHospitalDetails = this.hospitalDetails.filter(hospital => 
            hospital.state == selectedState && hospital.district == selectedDistrict
        );
    } else {
        this.filterHospitalDetails = [];
    }
}

onChangeHospital(){
  const hospitalId = this.bookappoinmentStateDistrictForm.get('hospital')?.value;
  if(hospitalId){
    this.filterDoctors = this.doctors.filter(doctor => 
      hospitalId.includes(hospitalId)
      );
  }else{
    this.filterDoctors = [];
  }
}

  async postBookAppoinment(appoinments: bookappoinment): Promise<void> {
    try {
      const response = await this.patientRepository.postBookAppoinment(appoinments);
      if(response){
        alert('Appoinment booked successfull');
        console.log('Successful', response);
        this.router.navigate(['patient-view-appoinmentstatus']);
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
