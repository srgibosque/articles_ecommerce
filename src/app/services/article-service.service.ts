import { Injectable } from '@angular/core';
import { Article } from '../model/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  private articles: Article[]
  constructor() {
    this.articles = [
      new Article('Beige Chair', '../../assets/ChairBeige.jpg', 8.99, false, 3, 0),
      new Article('Velvet Chair', '../../assets/velvetChair.jpg', 16.52, true, 5, 1),
      new Article('Block Chair', '../../assets/BlockChair.jpg', 25.99, true, 2, 2)
    ];
  }

  getArticles(): Article[] {
    return this.articles;
  }

  changeQuantity(articleObject: {article:Article, selectedQuantity: number, action:string}): void{
    if(articleObject.action === "add"){
      articleObject.article.quantityInChart! += 1;
      articleObject.article.isSubtractDisabled = articleObject.article.quantityInChart === 0;

    } else if (articleObject.action === "subtract"){

      if(articleObject.article.quantityInChart! > 0){
        articleObject.article.quantityInChart! -= 1;
        articleObject.article.isSubtractDisabled = articleObject.article.quantityInChart === 0;
      }
    }
  }

  create(article: Article){
    this.articles.push(article);
  }
}
