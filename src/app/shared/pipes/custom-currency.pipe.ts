import { Pipe, PipeTransform } from '@angular/core';
import { Settings } from '../../core/settings';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {

  constructor (private decimalPipe: DecimalPipe) { }

  transform(value: number, fractionSize: number = 0): string {
    if(isNaN(value)){
      return value.toString();
    } else {
      var symbol = '$'; //this.settings.currencyCode;
      var fractionSize = fractionSize === undefined ? 2 : fractionSize;
      return symbol + this.decimalPipe.transform(value, '1.2-2');
    }
  }

}
