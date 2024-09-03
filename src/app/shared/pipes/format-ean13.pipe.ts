import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatEan13',
  standalone: true
})
export class FormatEan13Pipe implements PipeTransform {

  transform(value: string | number): string {
    return value.toString().padStart(13, '0');
   }
}
