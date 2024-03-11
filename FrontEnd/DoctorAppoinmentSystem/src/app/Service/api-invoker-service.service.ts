import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'api-config';

@Injectable({
  providedIn: 'root'
})
export class ApiInvokerServiceService implements OnInit {

  serviceURL: string = API_URL;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void { }

  getFullAPIUrl(path: string) {
    return this.serviceURL + path;
  }

  async get<T>(url: string): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.httpClient.get<T>(this.getFullAPIUrl(url)).subscribe((response: any) => {
        console.log('Response', response);
        resolve(response);
      },
        (error) => {
          console.error('Admin Login Error:', error);
          reject(error);
        })
    })
  }

  post<T>(url: string, body: any): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.httpClient.post<T>(this.getFullAPIUrl(url), body).subscribe((response: any) => {
        console.log('Response,response');
        resolve(response);
      },
        (error) => {
          console.error('Error', error);
          reject(error);
        })
    })
  }

  put<T>(url: string, data: any): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.httpClient.put<T>(this.getFullAPIUrl(url), data).subscribe(
        (response: any) => {
          console.log('Response', response);
          resolve(response);
        },
        (error) => {
          console.error('Error', error);
          reject(error);
        }
      );
    });
  }
}
