import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  readonly endpoint = environment.api;

  constructor(private http: HttpClient) {}

  public loadProducts() {
    return this.http.get<any[]>(`${this.endpoint}/products`);
  }

  public getCommentsByProductName(name: string) {
    return this.http.get<any[]>(
      `${this.endpoint}/products/productName?productName=${name}`
    );
  }

  public createComment(product: string, comment: string) {}
}
