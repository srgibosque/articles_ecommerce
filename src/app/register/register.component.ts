import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../model/user';
import { RegisterResponse } from '../model/registerResponse';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  public registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router ){}

  get username() { return this.registerForm.get('username'); }

  get password() { return this.registerForm.get('password'); }

  ngOnInit(){
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(){
    if (this.registerForm.valid){
      console.log(this.registerForm.value);

      const registeredUser: User = this.registerForm.value;

      this.userService.register(registeredUser)
        .subscribe((res:RegisterResponse) => {
          const message = res.msg;
          console.log(message);
          this.router.navigate(['/users', 'login']);
        })

    } else {
      console.log("Invalid form");
      this.username?.markAsDirty();
      this.password?.markAsDirty();
    }
  }
}
