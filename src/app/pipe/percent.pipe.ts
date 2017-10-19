import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percent'
})
export class PercentPipe implements PipeTransform {

  transform(input: number): number {
    if(input > 100){
      return 100;
    }
    if(input < 0){
      return 0;
    }
    return input;
  }

}
