import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundAt0'
})
export class RoundAt0Pipe implements PipeTransform {

  transform(input: number): number {
    return Math.round(input);
  }

}
