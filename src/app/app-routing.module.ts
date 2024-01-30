import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleNewTemplateComponent } from './article-new-template/article-new-template.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ArticleListComponent } from './article-list/article-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'articles/list', canActivate: [AuthGuardService], component: ArticleListComponent},
  {path: 'articles/create', component: ArticleNewReactiveComponent },
  {path: 'articles/:id', component: ArticleDetailComponent},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
