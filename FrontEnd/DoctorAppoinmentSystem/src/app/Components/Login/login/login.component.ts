import { Component, OnInit } from '@angular/core';
import { LoginRepository } from 'src/app/Repository/login-repository';
import { Router } from '@angular/router';
import { CommonpropertiesService } from 'src/app/Service/commonproperties.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private loginrepository: LoginRepository, 
    private router: Router, 
    private commonproperties: CommonpropertiesService) { }
  username: string = '';
  password: string = '';
  user: string = '';
  ngOnInit(): void {
  }
  async onSubmit() {
    try {
      const response = await this.loginrepository.login(this.username, this.password, this.user);
      const arrayresponse=response[0];
      this.commonproperties.setDetails(arrayresponse.userName,arrayresponse.id,arrayresponse.image);
      if (this.username == arrayresponse.userName) {
        switch (this.user) {
          case 'Admin':
            this.router.navigate(['admin-dashboard']);
            break;
          case 'Doctor':
            this.router.navigate(['doctor-dashboard']);
            break;
          case 'Patient':
            this.router.navigate(['patient-book-appoinment']);
            break;
          default:
            console.log("Invalid User");
            break;
        }
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  }
}
