import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
//URL BASE DA API 
private apiurl = 'http://localhost:8888/api';


  constructor(
    private http : HttpClient,
  ) { }


  //Método para obter todos os usuarios
  getUsers(): Observable<any>{
    //faz o get na api
    return this.http.get(this.apiurl);
  } 
}
