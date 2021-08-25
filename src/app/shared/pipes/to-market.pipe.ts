import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toMarket'
})
export class ToMarketPipe implements PipeTransform {

  transform(value: string | null) {
    if(value==="R$ 0,00" ){
      return "A mercado";
    }

    return value;
  }

}
