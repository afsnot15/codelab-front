import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'monetary',
  standalone: true
})
export class FormatMonetaryPipe implements PipeTransform {

  transform(value: string | number): string {
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return formatter.format(Number(value));
  }
}
