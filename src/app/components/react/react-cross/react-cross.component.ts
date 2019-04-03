import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Customer } from 'src/app/model/models';
import { FileHelper } from 'src/app/helper/file-helper';

function passwordCrossFieldValidator(c: AbstractControl): { [key: string]: boolean } | null {
  let password = c.get('password');
  let confirmPassword = c.get('confirmPassword');

  // since it is applied on formGroup need to check the state of controls before validating
  if (password.pristine || confirmPassword.pristine) {
    return null;
  }
  if (password.value !== confirmPassword.value) {
    return { 'passwordCompare': true };
  }
  return null;
}

@Component({
  selector: 'app-react-cross',
  templateUrl: './react-cross.component.html',
  styleUrls: ['./react-cross.component.css']
})
export class ReactCrossComponent implements OnInit {

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
      mobile: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      image: ['', [Validators.required]],
      job: [''],
      passwordGroup: this.builder.group({
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
        confirmPassword: ['', [Validators.required]]
      }, { validator: passwordCrossFieldValidator }), // must required to pass validator as an object to formGroup
    });
  }

  onSubmit() {
    console.log(this.fc);
  }

}
