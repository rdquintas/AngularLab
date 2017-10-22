import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelcase'
})
export class CamelcasePipe implements PipeTransform {

  transform(str: string): any {
    let list: string[];
    list = str.toLowerCase().split(' ');

    for (let index = 0; index < list.length; index++) {
      let el: string;
      el = list[index];
      el = el.toLowerCase();
      if (el.length > 2) {
        el = this.capitalize(el);
      }
      list[index] = el;
    }
    return list.join(' ');
  }

  private capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
}
