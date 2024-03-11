import { Component } from '@angular/core';
import { CommonpropertiesService } from 'src/app/Service/commonproperties.service';

@Component({
  selector: 'app-doctor-navbar',
  templateUrl: './doctor-navbar.component.html',
  styleUrls: ['./doctor-navbar.component.css']
})
export class DoctorNavbarComponent {
constructor( private commonpropertiesService:CommonpropertiesService){
}
LoginUserName=this.commonpropertiesService.getUserName();
LoginUserImage=this.commonpropertiesService.getImage();  
}
