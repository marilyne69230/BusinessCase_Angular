import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icredentials, Itoken } from '../interface/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="https://127.0.0.1:8000/api/login"

  constructor(private http: HttpClient) { }

  login(credentials:any): Observable<Itoken> {
    return this.http.post<Itoken>(this.url, credentials);
  }
}
