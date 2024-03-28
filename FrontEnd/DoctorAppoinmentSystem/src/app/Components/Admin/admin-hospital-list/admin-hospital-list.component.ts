import { Component, OnInit } from '@angular/core';
import { hospital } from 'src/app/Model/hospital';
import { AdminRepository } from 'src/app/Repository/admin-repository';

@Component({
  selector: 'app-admin-hospital-list',
  templateUrl: './admin-hospital-list.component.html',
  styleUrls: ['./admin-hospital-list.component.css']
})

export class AdminHospitalLIstComponent implements OnInit{
  hospitalDetails!:hospital[];
  constructor(
    private adminRepository:AdminRepository,
  ){
  }

  ngOnInit(): void {
    this.getHospitalDetails('');
  }

  async getHospitalDetails(username:string){
    try{
      this.hospitalDetails = await this.adminRepository.getHospitalDetails(username);
    }catch(error){
      console.log(error);
    }
  }
}
