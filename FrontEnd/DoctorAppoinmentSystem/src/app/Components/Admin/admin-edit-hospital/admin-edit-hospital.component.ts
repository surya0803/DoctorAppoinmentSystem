import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { hospital } from 'src/app/Model/hospital';
import { state } from 'src/app/Model/state';
import { district } from 'src/app/Model/district';
import { AdminRepository } from 'src/app/Repository/admin-repository';
import { CommonpropertiesService } from 'src/app/Service/commonproperties.service';
@Component({
  selector: 'app-admin-edit-hospital',
  templateUrl: './admin-edit-hospital.component.html',
  styleUrls: ['./admin-edit-hospital.component.css']
})
export class AdminEditHospitalComponent implements OnInit {

  
  state: state[] = [];
  district: district[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private adminRespository: AdminRepository,
    private commonpropertiesService: CommonpropertiesService,
    public matDialogRef: MatDialogRef<AdminEditHospitalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { hospital: hospital }) {
  }
  ngOnInit(): void {
    if (this.data.hospital) this.initializeForm(this.data.hospital);
  }

  updateHospitalForm: FormGroup = this.formBuilder.group({
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

  private initializeForm(hospital: hospital): void {
    this.updateHospitalForm.patchValue({
      name: hospital.name,
      state: hospital.state,
      district: hospital.district,
      location: hospital.location,
      pincode: hospital.pincode,
      address: hospital.address,
      phoneNumber: hospital.phoneNumber,
      email: hospital.email,
      website: hospital.website,
      administratorName: hospital.administratorName,
      administratorUserName: hospital.administratorUserName,
      administratorPassword: hospital.administratorPassword
    })
  }

  async putHospital(hospital: hospital): Promise<void> {
    try {
      const response = await this.adminRespository.putHospital(hospital);
    } catch (error) {
      console.log(error);
    }
  }

  onSubmit() {
    const formData = this.updateHospitalForm.value as hospital;
    this.putHospital(formData);
    console.log(formData);
  }

  async getState() {
    try {
      this.state = await this.adminRespository.getState();
    } catch (error) {
      console.log(error);
    }
  }

  async getDistrict(stateId: number) {
    try {
      this.district = await this.adminRespository.getDistrict(stateId);
    } catch (error) {
      console.log(error);
    }
  }

  onChangeState() {
    const selectedState = this.updateHospitalForm.get('state')?.value;
    this.updateHospitalForm.patchValue({
      district:''
    });
    this.getDistrict(selectedState);
  }
}
