import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from 'src/app/model/models';
import { FileHelper } from 'src/app/helper/file-helper';

@Component({
  selector: 'app-react-change',
  templateUrl: './react-change.component.html',
  styleUrls: ['./react-change.component.css']
})
export class ReactChangeComponent implements OnInit {

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
      image: ['', [Validators.required]],
      job: ['Employee'],
      notify: ['Email'],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmPassword: ['', [Validators.required]]
    });

    this.fc.get('notify').valueChanges.subscribe(value => this.setNotification(value.toString().toLowerCase()));
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
