import { Injectable } from "@angular/core";
import { ApiInvokerServiceService } from "../Service/api-invoker-service.service";
import {appoinment} from "../Model/appoinment";
import { patient } from "../Model/patient";
import { doctor } from "../Model/doctor";
import { admin } from "../Model/admin";
import { state } from "../Model/state";
import { district } from "../Model/district";
import { hospital } from "../Model/hospital";
@Injectable({
    providedIn:'root'
})

export class AdminRepository{
    constructor(private apiInvoker: ApiInvokerServiceService) {}

    async GetAllPatient():Promise<patient[]>{
        return await this.apiInvoker.get<patient[]>('Admin/GetAllPatientDetails');
    }
    async postAddDoctor(doctor:doctor):Promise<doctor>{
        return await this.apiInvoker.post('Admin/AddNewDoctor',doctor);
    }
    async postAddHospital(hospital:hospital):Promise<hospital>{
        return await this.apiInvoker.post('Admin/AddNewHospital',hospital);
    }
    async  getAllAppoinment():Promise<appoinment[]>{
        return await this.apiInvoker.get<appoinment[]>('Admin/GetAllAppoinmentDetails');
    }
    async  getAllDoctor():Promise<doctor[]>{
        return await this.apiInvoker.get<doctor[]>('Admin/GetAllDoctorDetails');
    }
    async getUserName(UserName:string):Promise<admin[]>{
        return await this.apiInvoker.get<admin[]>(`Admin/GetUserName?UserName=${UserName}`);
    }
    async getState():Promise<state[]>{
        return await this.apiInvoker.get<state[]>('Admin/GetState');
    }
    async getDistrict(stateId:number):Promise<district[]>{
        return await this.apiInvoker.get<district[]>(`Admin/GetDistrict?StateId=${stateId}`);
    }
    async getHospitalDetails(username:string):Promise<hospital[]>{
        return await this.apiInvoker.get<hospital[]>(`Admin/GetHospitalDetails?Username=${username}`);
    }
    async putHospital(hospital:hospital):Promise<hospital>{
        return await this.apiInvoker.put('Admin/UpdateHospitalDetails',hospital);
    }
}