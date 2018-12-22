import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, FormGroup, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[compare]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CompareDirective, multi: true }]
})
export class CompareDirective {

  @Input('compare') compare: string[] = [];

  validate(formGroup: FormGroup): ValidationErrors {
    return this.compareValidator(this.compare[0], this.compare[1])(formGroup);    
  }
  
  compareValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        // return null if controls haven't initialised yet
        if (!control || !matchingControl) {
          return null;
        }

        // return null if another validator has already found an error on the matchingControl
        if (matchingControl.errors && !matchingControl.errors.compare) {
            return null;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {            
            matchingControl.setErrors({ compare: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
}
