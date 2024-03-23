import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiInvokerServiceService } from "../Service/api-invoker-service.service";
import { admin } from "../Model/admin";
import { doctor } from "../Model/doctor";
import { patient } from "../Model/patient";
@Injectable({
    providedIn:'root'
})

export class LoginRepository{

    constructor(private apiInvoker: ApiInvokerServiceService) {}
    // async login(username :string, password: string, user : string):Promise<any>{
    //     switch (user) {
    //         case 'Admin':
    //         return await this.apiInvoker.post<admin[]>(`Admin/AdminLogin?UserName=${username}&Password=${password}`,null);
    //         case 'Doctor':
    //         return await this.apiInvoker.post<doctor[]>(`Doctor/DoctorLogin?UserName=${username}&Password=${password}`,null);
    //         case 'Patient':
    //         return await this.apiInvoker.post<patient[]>(`Patient/PatientLogin?UserName=${username}&Password=${password}`,null);
    //         default:
    //         throw new Error(`Unsupported user`);
    //     }
    // }
    async login(username :string, password: string):Promise<any>{
            return await this.apiInvoker.post<patient[]>(`Admin/Login?UserName=${username}&Password=${password}`,null);
    }
}
