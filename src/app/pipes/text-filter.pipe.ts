import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../model/article';

@Pipe({
  name: 'textFilter'
})
export class TextFilterPipe implements PipeTransform {

  transform(value: Array<Article>, filter: string): any {
    // if(value.length === 0){
    //   return value;
    // }
    const resultArray = [];
    for (const item of value){
      if(item.name === filter){
        resultArray.push(item);
      }
    }

    return resultArray;
  }

}
