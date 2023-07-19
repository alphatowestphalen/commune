import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removenumber'
})
export class RemovenumberPipe implements PipeTransform {

  transform(value: number): number {
    if (value == null) {
      return 0;
    }
    const stringValue = value.toString();
    const truncatedValue = stringValue.slice(0, -4);
    return parseInt(truncatedValue, 10);
  }

}
