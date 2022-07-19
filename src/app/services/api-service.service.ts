import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Comment } from '../model/comment';

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
    return this.http.get<any[]>(`${this.endpoint}/products/${name}`);
  }

  public createComment(comment: Comment) {
    return this.http.post<Comment>(
      `${this.endpoint}/products/${comment.partitionKey}`,
      comment
    );
  }
}
