import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImg'
})
export class DefaultImgPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (value === ''){
      return 'assets/images/defaultImage.png';
    }
    return value;
  }

}
