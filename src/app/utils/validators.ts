import { AbstractControl } from '@angular/forms';

export class MyValidators{
    static isPriceValid(control: AbstractControl){
        const value = control.value;

        if(value > 10000){
            console.log(value);
            return { message: 'Price not valid' };
        }else{
            return null;
        }
    }
}
