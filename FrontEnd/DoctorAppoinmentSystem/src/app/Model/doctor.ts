export interface doctor {
    id:number;
    userName: string;
    password: string;
    name: string;
    dob: Date;
    gender: number;
    phoneNumber: string;
    address: string;
    specialization: string;
    experience: number;
    image: string;
    createdBy: string;
    createdDateTime: Date | string;
    updatedBy: string;
    updatedDateTime: Date | string;
  }
  
  export enum Gender{
    Male = 1,
    Female =2,
  }
