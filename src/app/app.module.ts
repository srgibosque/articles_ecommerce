import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleNewTemplateComponent } from './article-new-template/article-new-template.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleServiceService } from '../app/services/article-service.service';
import { UserService } from './services/user.service';
import { MoneyFormatPipe } from './pipes/money-format.pipe';
import { DefaultImgPipe } from './pipes/default-img.pipe';
import { TextFilterPipe } from './pipes/text-filter.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component'; 
import { ArticleAppService } from './interceptors/article-app.service';
import { AuthGuardService } from './services/auth-guard.service';

const appRoutes: Routes = [
  {path: '', component: ArticleListComponent },
  {path: 'articles', canActivate: [AuthGuardService], component: ArticleListComponent},
  {path: 'articles/:id', component: ArticleDetailComponent},
  {path: 'templateForm', component: ArticleNewTemplateComponent },
  {path: 'reactiveForm', component: ArticleNewReactiveComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleItemComponent,
    ArticleListComponent,
    NavbarComponent,
    ArticleNewTemplateComponent,
    ArticleNewReactiveComponent,
    MoneyFormatPipe,
    DefaultImgPipe,
    TextFilterPipe,
    LoginComponent,
    RegisterComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule,
    RouterModule.forRoot(appRoutes) // Register our routes to our angular app.
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
