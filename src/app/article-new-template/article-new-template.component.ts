import { Component } from '@angular/core';
import { Article } from '../model/article';


@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrl: './article-new-template.component.css'
})

export class ArticleNewTemplateComponent {
  public article: Article;
  imageUrlPattern = 'https://www\\.[a-zA-Z0-9-]+\\.[a-zA-Z]{2,}/[a-zA-Z0-9-]+\\.(jpg|jpeg|png|gif)';
  formSubmitted = false;

  constructor() {
    this.article = new Article('', '', 0, false);
  }

  createArticle(articleForm: any){
    this.formSubmitted = true;

    if (articleForm.valid) {
      this.article = articleForm.value.article;
      console.log(this.article);
    } else {
      console.error('Article form is in an invalid state');

    }
  }

}
