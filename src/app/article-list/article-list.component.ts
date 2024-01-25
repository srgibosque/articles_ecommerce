import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, switchMap,
  distinctUntilChanged, startWith, merge,
  share } from 'rxjs/operators';
  
  import { Article } from './../model/article';
  import { ArticleQuantityChange } from './../model/articleQuantityChange';
  import { ArticleServiceService } from '../services/article-service.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ArticleListComponent implements OnInit {

  public articles$!: Observable<Article[]>;
  
  public searchString: string = '';
  private searchTerms: Subject<string> = new Subject();
  private reloadArticleList : Subject <void> = new Subject();

  constructor(private articleService: ArticleServiceService) {}

  ngOnInit() {
    this.articles$ = this.searchTerms.pipe(
      startWith(this.searchString),
      debounceTime(500),
      distinctUntilChanged(),
      merge(this.reloadArticleList),
      switchMap((q) => this.articleService.getArticles(this.searchString)));
  }
   

  onQuantityChange(change: ArticleQuantityChange) {
    this.articleService.changeQuantity(change.article.id!, change.changeInQuantity)
      .subscribe((res) => {
        console.log(res.msg);
        this.reloadArticleList.next();
      });
  }

  search() {
    this.searchTerms.next(this.searchString);
  }

  onNew() {
    this.reloadArticleList.next();
  }

}
