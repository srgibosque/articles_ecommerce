import { Injectable } from '@angular/core';
import { Article } from '../model/article';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  constructor(private http: HttpClient) {
  }

  getArticles(query?: string): Observable<Article[]> {
    return this.http.get<Article[]>('/api/articles');
  }

  changeQuantity(id:number, changeInQuantity:number): Observable<any>{
    return this.http.patch<Article>('/api/articles/' + id.toString(), {changeInQuantity}); 
  }
  
  create(article: Article): Observable<any> {
    return this.http.post('/api/articles', article);
  }

}