import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  public token!: string;

  constructor() { }

  saveToken(token : string): void {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  isUserLoggedIn(): boolean {
    if(this.token === undefined){
      return false;
    } else {
      return true;
    }
  }
}
