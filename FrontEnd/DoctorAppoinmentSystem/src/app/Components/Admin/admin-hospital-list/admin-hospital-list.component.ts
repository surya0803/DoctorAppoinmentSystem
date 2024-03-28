import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { hospital } from 'src/app/Model/hospital';
import { AdminRepository } from 'src/app/Repository/admin-repository';
import { AdminEditHospitalComponent } from '../admin-edit-hospital/admin-edit-hospital.component';
@Component({
  selector: 'app-admin-hospital-list',
  templateUrl: './admin-hospital-list.component.html',
  styleUrls: ['./admin-hospital-list.component.css']
})

export class AdminHospitalLIstComponent implements OnInit{
  hospitalDetails!:hospital[];
  constructor(
    private matDialog: MatDialog,
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

  openEditHospitalDialog(hospital:hospital):void{
    const dialogRef = this.matDialog.open(AdminEditHospitalComponent, {
      maxHeight: '80vh',
      data: { hospital:hospital },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.getHospitalDetails('');
    });
  }
}
