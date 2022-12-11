import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'vuela' 
 })

export class VuelaPipe implements PipeTransform{

    transform(value: boolean): string {
        if (value){
            return 'vuela'
        }else{
            return 'no vuela'
        }
    }

}