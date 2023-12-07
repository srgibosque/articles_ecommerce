import { Article } from './../model/article';
import { Component, OnInit } from '@angular/core';

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

export class ArticleListComponent {
  public articles!: Array<Article>;

  constructor() {}

  ngOnInit(){
    this.articles = [
      new Article('Beige Chair', '../../assets/ChairBeige.jpg', 8.99, false, 3, 0),
      new Article('Velvet Chair', '../../assets/velvetChair.jpg', 16.52, true, 5, 1),
      new Article('Block Chair', '../../assets/BlockChair.jpg', 25.99, true, 2, 2)
    ];
  }

  onQuantityChange(articleObject: any){
    
    if(articleObject.action === "add"){
      articleObject.article.quantityInChart += 1;
      articleObject.article.isSubtractDisabled = articleObject.article.quantityInChart === 0;

    } else if (articleObject.action === "subtract"){

      if(articleObject.article.quantityInChart > 0){
        articleObject.article.quantityInChart -= 1;
        articleObject.article.isSubtractDisabled = articleObject.article.quantityInChart === 0;
      }
    }
  }

}
