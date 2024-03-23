import { Component, OnInit } from '@angular/core';
import { CommonpropertiesService } from 'src/app/Service/commonproperties.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {
  usertype:string='0';

  constructor(private commonpropertiesService:CommonpropertiesService){}

  ngOnInit(): void {
    this.usertype=this.commonpropertiesService.password;
  }
  LoginUserName=this.commonpropertiesService.getUserName();
  LoginUserImage=this.commonpropertiesService.getImage();
}
