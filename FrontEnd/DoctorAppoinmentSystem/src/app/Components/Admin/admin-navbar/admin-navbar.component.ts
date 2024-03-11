import { Component } from '@angular/core';
import { CommonpropertiesService } from 'src/app/Service/commonproperties.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent {
  constructor(private commonpropertiesService:CommonpropertiesService){}
  LoginUserName=this.commonpropertiesService.getUserName();
  LoginUserImage=this.commonpropertiesService.getImage();
}
