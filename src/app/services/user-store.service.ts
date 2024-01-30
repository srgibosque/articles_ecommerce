import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  public token!: string;

  constructor() { }

  saveToken(token : string): void {
    this.token = token;
    localStorage.setItem('token', this.token );
  }

  getToken(): string {
    return this.token;
  }

  isUserLoggedIn(): boolean {
    if (typeof localStorage !== 'undefined'){
      this.token = localStorage.getItem('token') ?? '';
      if(this.token === undefined || this.token === '') {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
}
