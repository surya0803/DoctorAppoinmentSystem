import { Time } from "@angular/common";
export interface appoinment {
  id : number;
  patientName: string;
  doctorName: string;
  purpose: string;
  description: string;
  date : Date;
  startTime : Time ;
  endTime : Time ;
  timeSlotId : number;
  status: number;
  }

export enum status{
  'NotYetApproved' = 0,
  'Approved' = 1,
  'Denied' = 2,
}