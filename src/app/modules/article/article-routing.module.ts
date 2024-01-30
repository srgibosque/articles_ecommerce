import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from '../../services/auth-guard.service';
import { ArticleListComponent } from '../../article-list/article-list.component';
import { ArticleDetailComponent } from '../../article-detail/article-detail.component';
import { ArticleNewReactiveComponent } from '../../article-new-reactive/article-new-reactive.component';

const routes: Routes = [
  {path: 'list', canActivate: [AuthGuardService], component: ArticleListComponent},
  {path: 'create', canActivate: [AuthGuardService], component: ArticleNewReactiveComponent },
  {path: ':id', component: ArticleDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
