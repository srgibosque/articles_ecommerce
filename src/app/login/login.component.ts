import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  
  public loginForm!: FormGroup;

  constructor(private fb: FormBuilder){}

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

    } else {
      console.log("Invalid form");
      this.username?.markAsDirty();
      this.password?.markAsDirty();
    }
  }
}
