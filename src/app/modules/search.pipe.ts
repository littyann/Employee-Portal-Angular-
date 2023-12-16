import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchs'
})
export class SearchPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
