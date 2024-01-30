import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ArticleListComponent } from './article-list/article-list.component';

// const routes: Routes = [
//   {path: '', redirectTo: '/login', pathMatch: 'full' },
//   {path: 'articles/list', canActivate: [AuthGuardService], component: ArticleListComponent},
//   {path: 'articles/create', canActivate: [AuthGuardService], component: ArticleNewReactiveComponent },
//   {path: 'articles/:id', component: ArticleDetailComponent},
//   {path: 'login', component: LoginComponent },
//   {path: 'register', component: RegisterComponent }
// ];

const routes: Routes = [
  {path: '', redirectTo: '/users/login', pathMatch: 'full' },
  {path: 'articles', loadChildren: () => import('./modules/article/article.module').then(m => m.ArticleModule)},
  {path: 'users', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
