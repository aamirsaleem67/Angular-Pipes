import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: any, filteredString:string,propName:string): any {
     if(filteredString.length == 0 || values.length ===0)
     {
       return values;
     }
     const resultArray=[];
     for(const value of values){
         if(value[propName] == filteredString)
         {
            resultArray.push(value);
         }
     }
     return resultArray;
  }

}
