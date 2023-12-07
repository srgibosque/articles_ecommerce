import { Component, OnInit } from '@angular/core';
import { Article } from '../../app/model/article';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})

export class ArticleItemComponent implements OnInit {
  public article!: Article;
  public isSubtractDisabled: boolean = false;

  constructor() {}

  ngOnInit(){
    this.article = new Article('Beige Chair', '../../assets/ChairBeige.jpg', 8.99, false, 3);
    this.updateSubtractButtonState();
  }

  addQuantity(): void{
    this.article.quantityInChart = this.article.quantityInChart + 1;
    this.updateSubtractButtonState();
  }

  subtractQuantity(): void{
    if(this.article.quantityInChart > 0){
      this.article.quantityInChart = this.article.quantityInChart - 1;
      this.updateSubtractButtonState();
    }
  }

  private updateSubtractButtonState(): void {
    this.isSubtractDisabled = this.article.quantityInChart === 0;
  }

}
