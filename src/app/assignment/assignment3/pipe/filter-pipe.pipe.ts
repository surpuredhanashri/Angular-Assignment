import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, name: string) {
    
    if(name===''){
      return value;
    }

    return value.filter((user:any) => user.Name.startsWith(name));
  }

}
