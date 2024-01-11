import { Injectable } from '@angular/core';
import { Article } from '../model/article';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  private articles: Article[];
  private dataSubject =  new BehaviorSubject<Article[]>([]);

  constructor(private http: HttpClient) {
    this.articles = [];
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('/api/articles');
  }

  changeQuantity(id:number, changeInQuantity:number): Observable<Article>{
    return this.http.patch<Article>('/api/articles/' + id.toString(), {changeInQuantity}); 
  }
  
  create(article: Article): Observable<any> {
    return this.http.post('/api/articles', article);
  }

}