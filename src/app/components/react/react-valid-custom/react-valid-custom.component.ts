import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Customer } from 'src/app/model/models';
import { FileHelper } from 'src/app/helper/file-helper';

function pinCodeValidator(c: AbstractControl): { [key: string]: boolean } | null {
  if (c.value) {
    if (c.value.toString().length !== 6) {
      return { 'pincode': true };
    }
  }
  return null;
}
function pinCodeValidatorFactory(length:number): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    if (c.value) {
      if (c.value.toString().length !== length) {
        return { 'pincode': true };
      }
    }
    return null;
  }
}

@Component({
  selector: 'app-react-valid-custom',
  templateUrl: './react-valid-custom.component.html',
  styleUrls: ['./react-valid-custom.component.css']
})
export class ReactValidCustomComponent implements OnInit {

  fc: FormGroup;
  customer: Customer;
  fileHelper: FileHelper;

  constructor(private builder: FormBuilder) {
    this.customer = new Customer();
    this.fileHelper = new FileHelper();
  }

  ngOnInit() {
    this.fc = this.builder.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      mobile: [''],
      email: ['', [Validators.required, Validators.email]],
      pinCode: ['', [Validators.required, pinCodeValidatorFactory(8)]],
      image: ['', [Validators.required]],
      job: ['Employee'],
      notify: ['Email'],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  onSubmit() {
    console.log(this.fc);
  }

  setNotification(type: string) {
    const mobileControl = this.fc.get('mobile');
    if (type === 'text') {
      mobileControl.setValidators([Validators.required, Validators.minLength(7), Validators.maxLength(10)]);
    } else {
      mobileControl.clearValidators();
    }
    mobileControl.updateValueAndValidity();
  }

}
