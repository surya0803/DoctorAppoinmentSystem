import { Time } from "@angular/common";

export interface updateDoctorAvailability{
    id : number;
    patientName: string;
    doctorName: string;
    purpose: string;
    description: string;
    date : Date;
    startTime : string | null;
    endTime : string | null;
    timeSlotId : number;
    status: number;
}