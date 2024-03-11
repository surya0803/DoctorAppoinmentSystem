import { Component } from '@angular/core';
import { CommonpropertiesService } from 'src/app/Service/commonproperties.service';
@Component({
  selector: 'app-patient-navbar',
  templateUrl: './patient-navbar.component.html',
  styleUrls: ['./patient-navbar.component.css']
})
export class PatientNavbarComponent {
constructor( private commonPropertiesService:CommonpropertiesService){}
LoginUserName = this.commonPropertiesService.getUserName();
LoginUserImage = this.commonPropertiesService.getImage();
}
