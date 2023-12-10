import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Article } from '../../app/model/article';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ArticleItemComponent implements OnInit {
  @Input() public article!: Article;

  constructor() {}

  ngOnInit(){
    // this.updateSubtractButtonState();
  }

  @Output() articleQuantityChange = new EventEmitter<Object>();

  onArticleQuantityChange(action: string){
    this.articleQuantityChange.emit({
      article: this.article,
      selectedQuantity: this.article.quantityInChart,
      action: action
    })
  }


  // addQuantity(): void{
  //   this.article.quantityInChart = this.article.quantityInChart + 1;
  //   this.updateSubtractButtonState();
  // }

  // subtractQuantity(): void{
  //   if(this.article.quantityInChart > 0){
  //     this.article.quantityInChart = this.article.quantityInChart - 1;
  //     this.updateSubtractButtonState();
  //   }
  // }

  // private updateSubtractButtonState(): void {
  //   this.isSubtractDisabled = this.article.quantityInChart === 0;
  // }

}
