import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export function nameArticleValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value as string;

    const invalidNames: string[] = ['Prova','Test','Mock','Fake'];
    let isNameValid = true;

    for (let name of invalidNames) {
      if(name === value){
        isNameValid = false;
      }
    }

    return isNameValid ? null : { invalidName: true };
  };
}