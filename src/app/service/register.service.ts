import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  constructor(private http: HttpClient) { }

  register(): Observable<UserInterface> {
    return this.http.get<UserInterface>('https://127.0.0.1:8000/api/user/new')
  }
}
