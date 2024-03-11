
export interface bookappoinment {
  id : number;
  doctorId: number;
  patientId: number;
  purpose: string;
  description: string;
  date: Date;
  timeSlotId : number;
  status: number;
  }

export enum status{
  'Not Yet Approved' = 0,
  'Approved' = 1,
  'Denied' = 2,
}