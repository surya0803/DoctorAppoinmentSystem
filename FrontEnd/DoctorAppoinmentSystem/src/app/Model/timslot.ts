import { Time } from "@angular/common";

export interface timeslot {
    id : number;
    doctorId : number;
    date: Date;
    startTime:Time;
    endTime:Time;
    availability : number;
  }
