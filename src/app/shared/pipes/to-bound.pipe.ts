import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toBound'
})
export class ToBoundPipe implements PipeTransform {

  transform(value: boolean) {
    if(value)
      return "Sim"
    return "Não";
  }

}
