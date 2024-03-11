import { Injectable } from "@angular/core";
import { ApiInvokerServiceService } from "../Service/api-invoker-service.service";
import { doctor } from "../Model/doctor";
import { appoinment } from "../Model/appoinment";
import { updateDoctorAvailability } from "../Model/updateDoctorAvailability";
@Injectable({
    providedIn:'root'
})

export class DoctorRepository{
constructor(private apiInvoker: ApiInvokerServiceService){}

async putDoctor(doctor:doctor):Promise<any>{
    return await this.apiInvoker.put('Doctor/UpdateDoctorDetails',doctor);
}

async getHistoryOfAppoinment(username : string): Promise<appoinment[]> {
    return await this.apiInvoker.get(`Doctor/HistoryOfAppoinment?UserName=${username}`);
}

async getTodayAppoinment(username : string): Promise<appoinment[]> {
    return await this.apiInvoker.get(`Doctor/TodayAppoinment?UserName=${username}`);
}

async getUpcomingAppoinment(username : string): Promise<appoinment[]> {
    return await this.apiInvoker.get(`Doctor/UpComingAppoinment?UserName=${username}`);
}

async putDoctorAvailability(appoinment:updateDoctorAvailability): Promise<any>{
    return await this.apiInvoker.post(`Doctor/UpdateDoctorAvailability`,appoinment);
}

async getAppoinmentStatus(username : string): Promise<appoinment[]> {
    return await this.apiInvoker.get(`Doctor/GetAppoinmentStatus?UserName=${username}`);
}

async putAppoinmentStatus(id:BigInt, status:number):Promise<any>{
    return await this.apiInvoker.put(`Doctor/PutAppoinmentStatus?Id=${id}&status=${status}`,null);
}

async getDoctorByUserName(userName : string):Promise<any>{
    return this.apiInvoker.get(`Doctor/GetDoctorByUserName?UserName=${userName}`);
}
}