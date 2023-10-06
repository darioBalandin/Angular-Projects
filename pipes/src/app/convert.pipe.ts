import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: unknown, targetUnits: string): unknown {
    console.log(value)

    if (!value || typeof value !== 'number') {
      return '';
    }

    switch (targetUnits) {
      case 'km': {
        return value * 1.609;
      }
      case 'm': {
        return value * 1.609 * 1000;
      }
      default: {
        throw new Error('Target unit not supported');
      }

    }

  }
}
