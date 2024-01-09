import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Article } from '../../app/model/article';
import { ArticleQuantityChange } from './../model/ArticleQuantityChange';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ArticleItemComponent {
  @Input() public article!: Article;
  @Output() public articleQuantityChange: EventEmitter<ArticleQuantityChange> = new EventEmitter();

  constructor() {}

  // onArticleQuantityChange(action: string){
  //   this.articleQuantityChange.emit({
  //     article: this.article,
  //     selectedQuantity: this.article.quantityInChart,
  //     action: action
  //   })
  // }

  incrementInCart() {
    this.articleQuantityChange.emit({ article: this.article, changeInQuantity: 1 });
  }

  decrementInCart() {
    if (this.article.quantityInChart! > 0) {
      this.articleQuantityChange.emit({ article: this.article, changeInQuantity: -1 });
    }
  }

}
