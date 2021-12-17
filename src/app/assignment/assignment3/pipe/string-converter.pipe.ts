import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringConverter'
})
export class StringConverterPipe implements PipeTransform {


  // this convert only first alphabet to uppercase to lowercase --- L-U

  // transform(strvalue: string, strTemp:string):string {


  //   var iStringToReturn = "";

  //   if(strTemp=='capitalize'){
  //     iStringToReturn = strvalue.substr(0,1).toLowerCase();
  //   }
  //   else if(strTemp=='lowercase'){
  //     iStringToReturn = strvalue.substr(0,1).toUpperCase();
  //   }

  //   return iStringToReturn+strvalue.substr(1);

  // }

  // this convert whole string to U-L and L-U

  transform(strvalue: string, strTemp:string):string {

    
    var iStringToReturn = "";

    if(strTemp=='capitalize'){
      iStringToReturn = strvalue.toLowerCase();
    }
    else if(strTemp=='lowercase'){
      iStringToReturn = strvalue.toUpperCase();
    }

    return iStringToReturn;

  }

}
