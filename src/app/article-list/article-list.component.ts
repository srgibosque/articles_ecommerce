import { Article } from './../model/article';
import { ArticleQuantityChange } from './../model/articleQuantityChange';
import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from '../services/article-service.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})

export class ArticleListComponent implements OnInit {

  public articles$!: Observable<Article[]>;
  private destroy$ = new Subject<void>();

  constructor(private articleService: ArticleServiceService) {}

  ngOnInit() {
    this.articles$ = this.articleService.getArticles();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onQuantityChange(change: ArticleQuantityChange) {
    this.articleService.changeQuantity(change.article.id!, change.changeInQuantity)
      .pipe(
        switchMap(() => this.articleService.getArticles()),
        takeUntil(this.destroy$)
      )
      .subscribe((articles) => {
        this.articles$ = this.articleService.getArticles();
      });
  }

}
