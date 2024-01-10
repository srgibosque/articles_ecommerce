import { Article } from './../model/article';
import { ArticleQuantityChange } from './../model/articleQuantityChange';
import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from '../services/article-service.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})

export class ArticleListComponent implements OnInit {
  // public articles!: Article[];
  public articles$!: Observable<Article[]>;
  public filteredName = '';

  constructor(private articleService: ArticleServiceService) {}

  ngOnInit(){
    this.articles$= this.articleService.getArticles();
  }

  onQuantityChange(change: ArticleQuantityChange) {
    console.log(change.article.id);
    console.log(change.changeInQuantity);
    this.articleService.changeQuantity(change.article.id!, change.changeInQuantity).subscribe((article) => {
      article.quantityInCart += change.changeInQuantity;
    });
  }

}
