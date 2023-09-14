import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EthInterface } from '../interface/eth.interface';
@Injectable({
  providedIn: 'root'
})
export class EthService {

  constructor(private http: HttpClient) { }

  getAllEths(): Observable<EthInterface[]> {
    return this.http.get<EthInterface[]>('https://127.0.0.1:8000/api/eth/')
  }
}
