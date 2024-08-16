import { Pipe, PipeTransform } from '@angular/core';
import { Quote } from '../../Core/Classes/quotes';

@Pipe({
  name: 'getRandomInList',
  standalone: true
})
export class getRandomInList implements PipeTransform {

  transform(value: any[]): any {
    if (!value || value.length === 0) {
      return { text: '', author: '' };
    }

    const randomNumber = Math.floor(Math.random() * 16) + 1;
    return value[randomNumber];
  }

}
