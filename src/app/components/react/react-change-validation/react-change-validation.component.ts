import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from 'src/app/model/models';
import { FileHelper } from 'src/app/helper/file-helper';

@Component({
  selector: 'app-react-change-validation',
  templateUrl: './react-change-validation.component.html',
  styleUrls: ['./react-change-validation.component.css']
})
export class ReactChangeValidationComponent implements OnInit {

  fc: FormGroup;
  customer: Customer;
  fileHelper: FileHelper;
  lastNameMessage: string;

  lastNameErrors = {
    required: 'This field is required',
    minlength: 'At least 3 characters are required',
    maxlength: 'At max 30 characters are allowed',
  };

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
      image: ['', [Validators.required]],
      job: ['Employee'],
      notify: ['Email'],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmPassword: ['', [Validators.required]]
    });

    let lastNameControl = this.fc.get('lastName');
    lastNameControl.valueChanges.subscribe(value => {
      this.lastNameMessage = '';
      if ((lastNameControl.touched || lastNameControl.dirty) && lastNameControl.errors) {
        this.lastNameMessage = Object.keys(lastNameControl.errors).map(key => this.lastNameMessage += this.lastNameErrors[key]).join(' ');
      }
    });
  }

  onSubmit() {
    console.log(this.fc);
  }

  setNotification(type:string) {
    const mobileControl = this.fc.get('mobile');    
    if (type === 'text') {
      mobileControl.setValidators([Validators.required, Validators.minLength(7), Validators.maxLength(10)]);
    } else {
      mobileControl.clearValidators();
    }
    mobileControl.updateValueAndValidity();
  }

}
