import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleServiceService } from '../app/services/article-service.service';
import { UserService } from './services/user.service';
import { ArticleAppService } from './interceptors/article-app.service';
import { AuthGuardService } from './services/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    // ArticleItemComponent,
    // ArticleListComponent,
    NavbarComponent,
    // ArticleNewTemplateComponent,
    // ArticleNewReactiveComponent,
    // MoneyFormatPipe,
    // DefaultImgPipe,
    // TextFilterPipe,
    // LoginComponent,
    // RegisterComponent,
    // ArticleDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    ArticleServiceService,
    UserService,
    AuthGuardService,
    provideClientHydration(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ArticleAppService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
