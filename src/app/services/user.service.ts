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

  getAllUser() {
    return this.httpClient.get<{message:string,allusers:any}>(`${this.url}/api/getAllUser`);
  }

  DeleteUsers(id) {
    return this.httpClient.delete(`${this.url}/api/DeleteUsers/${id}`);
  }
 
  EditUser(user:any){
    return this.httpClient.put(`${this.url}/api/EditUser/${user.id}`,user);
  }

}
