import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminRepository } from 'src/app/Repository/admin-repository';
import { Router } from '@angular/router';
import { hospital } from 'src/app/Model/hospital';
import { district } from 'src/app/Model/district';
import { state } from 'src/app/Model/state';

@Component({
  selector: 'app-admin-add-hospital',
  templateUrl: './admin-add-hospital.component.html',
  styleUrls: ['./admin-add-hospital.component.css']
})
export class AdminAddHospitalComponent implements OnInit {
  addHospitalForm!: FormGroup;
  state: state[] = [];
  district: district[] = [];

  constructor(
    private adminRepository: AdminRepository,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.addHospitalForm = this.formBuilder.group({
      name: ['', Validators.required],
      state: ['', Validators.required],
      district: ['', Validators.required],
      location: ['', Validators.required],
      pincode: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      website: ['', Validators.required],
      administratorName: ['', Validators.required],
      administratorUserName: ['', Validators.required],
      administratorPassword: ['', Validators.required],
    });
    this.getState();
  }

  async postAddHospital(hospital: hospital): Promise<void> {
    try {
      const response = await this.adminRepository.postAddHospital(hospital);
    } catch (error) {
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

  onSubmit() {
    
      const formData = this.addHospitalForm.value as hospital;
      this.postAddHospital(formData);
      console.log(formData);

  }

  onChangeState() {
    const selectedState = this.addHospitalForm.get('state')?.value;
    this.addHospitalForm.patchValue({
      district:''
    });
    this.getDistrict(selectedState);
  }
}
