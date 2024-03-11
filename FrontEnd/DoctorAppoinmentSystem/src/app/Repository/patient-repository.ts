import { Injectable } from "@angular/core";
import { patient } from "../Model/patient";
import { doctor } from "../Model/doctor";
import { ApiInvokerServiceService } from "../Service/api-invoker-service.service";
import { appoinment } from "../Model/appoinment"; 
import { timeslot } from "../Model/timslot";
import { bookappoinment } from "../Model/BookAppoinment";
@Injectable({
    providedIn:'root'
})

export class PatientRepository{
    constructor(private apiInvoker: ApiInvokerServiceService){}

    async postRegisterPatient(patient:patient):Promise<patient[]>{
        return await this.apiInvoker.post(`Patient/RegisterPatient`,patient);
    }

    async putpatientDetails(patient:patient):Promise<patient[]>{
        return await this.apiInvoker.put(`Patient/UpdatePatientDetails`,patient);
    }

    async getpatientById(username :string):Promise<patient[]>{
        return await this.apiInvoker.get<patient[]>(`Admin/GetPatientByUserName?UserName=${username}`);
    }
    
    async getDoctorSpecialization():Promise<doctor[]>{
        return await this.apiInvoker.get<doctor[]>(`Patient/GetAllDoctorSpecialization`);
    }
    async postBookAppoinment(appoinment: bookappoinment):Promise<appoinment[]>{
       return await this.apiInvoker.post(`Patient/BookAppoinment`,appoinment);
    }

    async getAppoinmentStatus(username:string):Promise<appoinment[]>{
        return await this.apiInvoker.get<appoinment[]>(`Patient/GetAppoinmentStatus?UserName=${username}`);
    }

    async getTimeSlot(patientId:number,doctorId:number,date:Date):Promise<timeslot[]>{
        return await this.apiInvoker.get<timeslot[]>(`Patient/GetTimeSlot?PatientId=${patientId}&DoctorId=${doctorId}&Date=${date}`);
    }

}