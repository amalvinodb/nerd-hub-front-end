import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'arrayValue'
})
export class ArrayValuePipe implements PipeTransform {

  transform(arrayValue:any):any {
    console.log(arrayValue)
    return Object.values(arrayValue);
  }

}
