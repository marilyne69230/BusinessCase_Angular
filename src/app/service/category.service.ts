import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryInterface } from '../interface/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAllCategory(): Observable<CategoryInterface[]> {
    return this.http.get<CategoryInterface[]>('https://127.0.0.1:8000/api/category/')
  }

  getOneCategory(id:number): Observable<CategoryInterface> {
    return this.http.get<CategoryInterface>('https://127.0.0.1:8000/api/category/' + id)
  }
}
