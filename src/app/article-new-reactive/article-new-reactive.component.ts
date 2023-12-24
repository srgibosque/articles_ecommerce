import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms'; 
import { nameArticleValidator } from './customValidator';

@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrl: './article-new-reactive.component.css'
})
export class ArticleNewReactiveComponent {
  public articleForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  get name() { return this.articleForm.get('name'); }

  get price() { return this.articleForm.get('price'); }

  get imageUrl() { return this.articleForm.get('imageUrl'); }

  createForm(){
    this.articleForm = this.fb.group({
      name: [null, [Validators.required, nameArticleValidator()]],
      price: [null, [Validators.required, Validators.min(0.1)]],
      imageUrl: [null, [Validators.required, Validators.pattern('https://www\\.[a-zA-Z0-9-]+\\.[a-zA-Z]{2,}/[a-zA-Z0-9-]+\\.(jpg|jpeg|png|gif)')]],
      isOnSale: [false]
    });
  }

  onSubmit() {
    if (this.articleForm.valid) {
      console.log('articleForm values:', this.articleForm.value);
    } else {
      this.name?.markAsDirty();
      this.price?.markAsDirty();
      this.imageUrl?.markAsDirty();
      console.error('Article form is in an invalid state');
    }
  }
}
