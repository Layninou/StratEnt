import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundAt2'
})
export class RoundAt2Pipe implements PipeTransform {

  transform(input: number): number {
    return 0.01 * Math.round(input * 100);
  }

}
