import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundAt2'
})
export class RoundAt2Pipe implements PipeTransform {

  transform(input: number): number {
    var int = input * 100;
    var roundat2 = Math.round(int);
    var result = roundat2/100;
    return result;
  }

}
