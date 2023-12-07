import { Component, OnInit } from '@angular/core';
import { Article } from '../../app/model/article';

@Component({
  selector: 'app-article-list',
  template: `<div class="article-list-container">
  <app-article-item *ngFor = "let article of articles" [article] = "article"></app-article-item>
</div>`,
  styles: [`.article-list-container{
    display: flex;
    margin: 24px;
  }`]
})

export class ArticleListComponent {
  public articles!: Array<Article>;

  constructor() {}

  ngOnInit(){
    this.articles = [
      new Article('Beige Chair', '../../assets/ChairBeige.jpg', 8.99, false, 3),
      new Article('Velvet Chair', '../../assets/velvetChair.jpg', 16.52, true, 5),
      new Article('Block Chair', '../../assets/BlockChair.jpg', 25.99, true, 2)
    ];
    // this.updateSubtractButtonState();
  }

  addQuantity(index: number): void{
    this.articles[index].quantityInChart = this.articles[index].quantityInChart + 1;
    this.updateSubtractButtonState(index);
  }

  subtractQuantity(index: number): void{
    if(this.articles[index].quantityInChart > 0){
      this.articles[index].quantityInChart = this.articles[index].quantityInChart - 1;
      this.updateSubtractButtonState(index);
    }
  }

  private updateSubtractButtonState(index: number): void {
    this.articles[index].isSubtractDisabled = this.articles[index].quantityInChart === 0;
  }
}
