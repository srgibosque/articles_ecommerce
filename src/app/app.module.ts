import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleNewTemplateComponent } from './article-new-template/article-new-template.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleServiceService } from '../app/services/article-service.service';
import { HttpClientModule } from '@angular/common/http';
import { MoneyFormatPipe } from './pipes/money-format.pipe';  

@NgModule({
  declarations: [
    AppComponent,
    ArticleItemComponent,
    ArticleListComponent,
    NavbarComponent,
    ArticleNewTemplateComponent,
    ArticleNewReactiveComponent,
    MoneyFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule 
  ],
  providers: [
    ArticleServiceService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
