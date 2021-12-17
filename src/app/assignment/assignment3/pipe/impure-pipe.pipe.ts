import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impurePipe'
})
export class ImpurePipePipe implements PipeTransform {

 
  constructor(){
    console.log("Impure pipe is created..");
  }


  transform(value: number, ...args: any[]): number {

    console.log('Impurepipe: transform() is called, value'+value);

    return value;
  }

}
