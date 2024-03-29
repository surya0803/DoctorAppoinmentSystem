import { Component} from '@angular/core';
import { CommonpropertiesService } from './Service/commonproperties.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  constructor(
    private commonPropertiesService:CommonpropertiesService
  ){}

  getBackgroundImage() : any{
    if(this.commonPropertiesService.getBackgroundImage()) return this.commonPropertiesService.getBackgroundImage();
    return 'assets/images/admin.jpg';
  }
}


