import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder,FormGroup} from '@angular/forms';
import { doctor, Gender } from 'src/app/Model/doctor';
import { AdminEditdoctorComponent } from '../admin-editdoctor/admin-editdoctor.component';
import { AdminRepository } from 'src/app/Repository/admin-repository';
import { CommonpropertiesService } from 'src/app/Service/commonproperties.service';

@Component({
  selector: 'app-doctorlist',
  templateUrl: './doctorlist.component.html',
  styleUrls: ['./doctorlist.component.css']
})

export class DoctorlistComponent implements OnInit {
  constructor(
    private matDialog: MatDialog,
    private formBuilder:FormBuilder,
    private adminRepository: AdminRepository,
    private commonpropertiesService: CommonpropertiesService,
  ) {}

  doctors!: doctor[];
  filterDoctors!: doctor[];
  enumGender = Gender;
  LoginUserName = this.commonpropertiesService.getUserName();
  LoginUserImage = this.commonpropertiesService.getImage();

  ngOnInit(): void {
    this.getAllDoctor();
  }

  async getAllDoctor() {
    try{
      this.doctors = await this.adminRepository.getAllDoctor();
      this.filterDoctors=this.doctors;
      console.log(this.doctors);
    }catch(error){
      console.log("Can't fetch  doctors",error);
    }
  }
  openEditDoctorDialog(doctor: doctor):void {
    const dialogRef = this.matDialog.open(AdminEditdoctorComponent, {
      maxHeight: '${windowHeight}px',
      data: { doctor:doctor },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.getAllDoctor();
    });
  }

  filterDoctorForm: FormGroup = this.formBuilder.group({
    doctorName: [''],
    experience:[''],
    specialization: [''],
  });

  filterDoctor() {
    const filterValues = this.filterDoctorForm.value;
    const filteredAppointments = this.doctors.filter(doctor => {
      return (
        (filterValues.doctorName === '' || doctor.name.includes(filterValues.doctorName)) &&
        (filterValues.experience === '' || doctor.experience.toString() >= filterValues.experience) &&
        (filterValues.patientName === '' || doctor.specialization.includes(filterValues.specialization))
      );
    });
    this.filterDoctors = filteredAppointments;
  }
}
