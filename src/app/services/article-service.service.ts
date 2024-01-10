import { Injectable } from '@angular/core';
import { Article } from '../model/article';
import { Observable, throwError as ObservableThrow, of as ObservableOf } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  private articles: Article[]
  constructor(private http: HttpClient) {
    this.articles = [
      // new Article('Beige Chair', '../../assets/ChairBeige.jpg', 8.99, false, 3, 0),
      // new Article('Velvet Chair', '../../assets/velvetChair.jpg', 16.52, true, 5, 1),
      // new Article('Block Chair', '../../assets/BlockChair.jpg', 25.99, true, 2, 2)
    ];
  }

  getArticles(): Observable<any> {
    return this.http.get('/api/articles');
  }

  // changeQuantity(change: {article:Article, changeInQuantity: number}): void{
  //   const article = this.articles.find(({ id }) => change.article.id === id);
  //   article!.quantityInCart! += change.changeInQuantity;
  // }

  changeQuantity(id:number, changeInQuantity:number): Observable<any>{
    return this.http.patch('/api/articles/' + id.toString(), {changeInQuantity}); 
  }
  
  create(article: Article): Observable<any> {
    return this.http.post('/api/articles', article);
    // this.articles.push(article);
  }
}