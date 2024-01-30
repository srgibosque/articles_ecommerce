import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleDetailComponent } from '../../article-detail/article-detail.component';
import { ArticleNewReactiveComponent } from '../../article-new-reactive/article-new-reactive.component';
import { ArticleListComponent } from '../../article-list/article-list.component';
import { ArticleItemComponent } from '../../article-item/article-item.component';
import { DefaultImgPipe } from '../../pipes/default-img.pipe';
import { MoneyFormatPipe } from '../../pipes/money-format.pipe';
import { TextFilterPipe } from '../../pipes/text-filter.pipe';
import { ArticleNewTemplateComponent } from '../../article-new-template/article-new-template.component';


@NgModule({
  declarations: [
    DefaultImgPipe,
    MoneyFormatPipe,
    TextFilterPipe,
    ArticleListComponent, 
    ArticleItemComponent, 
    ArticleNewReactiveComponent,
    ArticleNewTemplateComponent, 
    ArticleDetailComponent,
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ArticleModule { }
