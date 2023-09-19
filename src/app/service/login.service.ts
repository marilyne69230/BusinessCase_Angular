import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icredentials } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="https://127.0.0.1:8000/api/login"

  constructor(private http: HttpClient) { }

  login(credentials:any) {
    return this.http.post<Icredentials>(this.url, credentials);
  }
}
