import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // for(let index=0; index < values.length;index++){
    //   // let value= values[index];
    //   let instance = values[index].instanceType;
    //   let reverseInstance ='';
    //   for(let i=instance.length-1; i >=0; i--){
    //       reverseInstance=reverseInstance+instance[i];
    //   }
    //   values[index]['instanceType']=reverseInstance;
      
    // }

    return value.split('').reverse().join('');
  }

}
