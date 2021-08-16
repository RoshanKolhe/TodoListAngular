import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByPriority'
})
export class OrderByPriorityPipe implements PipeTransform {

  transform(value: any, ranks: string[], field: string): any {
    const res = value.slice();
    return res.sort((a:any, b:any) =>
      ranks.indexOf(a[field].toLowerCase()) -
      ranks.indexOf(b[field].toLowerCase()));
  }
}
