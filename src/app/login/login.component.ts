import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../model/user';
import { loginResponse } from '../model/loginResponse';
import { UserService } from '../services/user.service';
import { UserStoreService } from '../services/user-store.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  
  public loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private userStoreService: UserStoreService, private router: Router){}

  get username() { return this.loginForm.get('username'); }

  get password() { return this.loginForm.get('password'); }

  ngOnInit(){
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(){
    if (this.loginForm.valid){
      console.log(this.loginForm.value);

      const loginUser: User = this.loginForm.value;

      this.userService.login(loginUser)
        .subscribe((res:loginResponse) => {
          const message = res.msg;
          const token = this.userStoreService.saveToken(res.token);
          console.log(message);
          this.router.navigate(['/articles', 'list']);
        })

    } else {
      console.log("Invalid form");
      this.username?.markAsDirty();
      this.password?.markAsDirty();
    }
  }
}
