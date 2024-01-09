import { Article } from './../model/article';
import { ArticleQuantityChange } from './../model/ArticleQuantityChange';
import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from '../services/article-service.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-article-list',
  template: `
  <div class="article-list-container">
    <app-article-item 
    *ngFor = "let article of articles$ | async"
    [article] = "article" 
    (articleQuantityChange) = "onQuantityChange($event)">
    </app-article-item>
  </div>`,
  styles: [`.article-list-container{
    display: flex;
    margin: 24px;
  }`]
})

export class ArticleListComponent implements OnInit {
  // public articles!: Article[];
  public articles$!: Observable<Article[]>;

  constructor(private articleService: ArticleServiceService) {}

  ngOnInit(){
    this.articles$= this.articleService.getArticles();
  }

  // onQuantityChange(articleObject: any){
  //   this.articleService.changeQuantity(articleObject);
  // }

  onQuantityChange(change: ArticleQuantityChange) {
    this.articleService.changeQuantity(change);
  }

}
