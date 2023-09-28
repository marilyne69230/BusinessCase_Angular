import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../interface/user.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>('https://127.0.0.1:8000/api/user/')
  }

  getOneUser(id:number): Observable<UserInterface> {
    return this.http.get<UserInterface>('https://127.0.0.1:8000/api/user/' + id)
  }
  
}
