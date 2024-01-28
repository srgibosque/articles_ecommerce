import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { User } from '../model/user';
import { RegisterResponse } from './../model/registerResponse';
import { loginResponse } from './../model/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    return this.http.post('/api/user/login', user);
  }

  register(user: User): Observable<any> {
    return this.http.post('/api/user/register', user);
  }
}
