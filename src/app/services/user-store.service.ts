import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  public token!: string;

  constructor() { }

  saveToken(token : string): void {
    this.token = token;
    console.log(this.token);
  }

  getToken(): string {
    return this.token;
  }
}
