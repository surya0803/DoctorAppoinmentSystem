export interface patient {
  id:number;
  userName: string;
  password: string;
  name: string;
  bloodGroup: number;
  gender: number;
  height: number;
  weight: number;
  dob: Date;
  phoneNumber: string;
  address: string;
  image: string;
  createdBy: string;
  createdDateTime: Date;
  updatedBy: string;
  updatedDateTime: Date;
}
export enum Gender{
  Male = 1,
  Female =2 , 
}
// enums.ts
export enum BloodGroup {
  A_POSITIVE =1,
  A_NEGATIVE =2,
  B_POSITIVE =3,
  B_NEGATIVE =4,
  AB_POSITIVE =5,
  AB_NEGATIVE =6,
  O_POSITIVE =7,
  O_NEGATIVE =8,
}