import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Article } from '../model/article';
import { ArticleServiceService } from '../services/article-service.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css'
})
export class ArticleDetailComponent implements OnInit {
  public id!: number;
  public article!: Article;
  public articles!: Article[];

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleServiceService
  ){}


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    this.articleService.getArticles()
    .subscribe((articles: Article[]) => {
      this.article = articles[this.id - 1];
      
    });

  }

}
