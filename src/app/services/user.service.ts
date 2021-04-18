import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  url:string;
  constructor(private httpClient:HttpClient) { 
    this.url = environment.defaultUrl;
  }
  
  signup(user:any){
    return this.httpClient.post<{message:string}>(`${this.url}/api/signup`, user);
  }

  login(user:any) {
    return this.httpClient.post<{message:string, user:any}>(`${this.url}/api/login`, user);
  }
}
