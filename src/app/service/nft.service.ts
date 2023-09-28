import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NftInterface } from '../interface/nft.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NftService {

  constructor(private http: HttpClient) { }

  getAllNfts(): Observable<NftInterface[]> {
    return this.http.get<NftInterface[]>('https://127.0.0.1:8000/api/nft/')
  }

  getOneNft(id:number): Observable<NftInterface> {
    return this.http.get<NftInterface>('https://127.0.0.1:8000/api/nft/' + id)
  }

  likeNft(id:number): Observable<NftInterface> {
    return this.http.get<NftInterface>('https://127.0.0.1:8000/api/nft/' + id + '/like')
  }

}
