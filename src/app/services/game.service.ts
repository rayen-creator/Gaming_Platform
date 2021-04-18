import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  url:string;
  constructor(private httpClient:HttpClient) { 
    this.url = environment.defaultUrl;
  }
  AddGame(game:any){
    return this.httpClient.post<{message:string}>(`${this.url}/api/AddGame`, game);
  }
  GetAllGame(){
   return this.httpClient.get<{allgames:any}>(`${this.url}/api/GetAllGame`);
  }

  GetGameByID(id){
    return this.httpClient.get(`${this.url}/api/GetGameByID/${id}`)
  }
  DeleteGame (id){
    return this.httpClient.delete<{message:string}>(`${this.url}/api/DeleteGame/${id}`)
  }
  EditGame(game:any){
   return this.httpClient.put(`${this.url}/api/EditGame/${game.id}`,game);
  }
}
