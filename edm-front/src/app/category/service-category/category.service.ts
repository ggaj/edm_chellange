import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Category } from "../model-category/category.model";
import { environment } from './../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  index(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${environment.baseUrl}/category`)
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.baseUrl}/category/${id}`)
  }

  create(name: string): Observable<Category> {
    return this.httpClient.post<Category>(`${environment.baseUrl}/category`, { name })
  }

}
