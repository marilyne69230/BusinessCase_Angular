import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  
  url= 'http://localhost:8000'

  constructor(private http: HttpClient) { }

  // function to upload files
  upload(formData: FormData): Observable<HttpEvent<string[]>> {
    return this.http.post<string[]>(`${this.url}/file/upload`, formData, {
      reportProgress:true,
      observe: 'events'
    })
  }

  // function to download files
  // download(filename: string): Observable<HttpEvent<Blob>> {
  //   return this.http.get(`${this.url}/file/download/${filename}`, {
  //     reportProgress; true,
  //     observe: 'events',
  //     responseType: 'blob'
  //   });
  // } 
}
