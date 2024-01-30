import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { UserStoreService } from './user-store.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private userStore: UserStoreService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      const isUserLoggedIn: boolean = this.userStore.isUserLoggedIn();
      if(isUserLoggedIn){
        return true;
      } else {
        this.router.navigate(['users', 'login']);
        return false;
      }
  }
}
