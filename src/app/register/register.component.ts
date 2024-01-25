import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  public registerForm!: FormGroup;

  constructor(private fb: FormBuilder){}

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

    } else {
      console.log("Invalid form");
      this.username?.markAsDirty();
      this.password?.markAsDirty();
    }
  }
}
