import { Article } from './../model/article';
import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from '../services/article-service.service';

@Component({
  selector: 'app-article-list',
  template: `
  <div class="article-list-container">
    <app-article-item 
    *ngFor = "let article of articles"
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
  public articles!: Article[];

  constructor(private articleService: ArticleServiceService) {}

  ngOnInit(){
    this.articles = this.articleService.getArticles();
  }

  onQuantityChange(articleObject: any){
    this.articleService.changeQuantity(articleObject);
  }

}
