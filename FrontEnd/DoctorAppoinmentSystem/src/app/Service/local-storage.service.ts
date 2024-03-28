import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  addDataToLocalStorage(key: any, value: any) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.log(error);
    }
  }
  
  getDataFromLocalStorage(key: any): any {
    try {
      const value = localStorage.getItem(key);
      return value !== null ? value : '';
    } catch (error) {
      console.log(error);
    }
  }

  clearDataFromLocalStorage(key:any){
    try{
      localStorage.removeItem(key);
    }catch(error){
      console.log(error);
    }
  }
}
