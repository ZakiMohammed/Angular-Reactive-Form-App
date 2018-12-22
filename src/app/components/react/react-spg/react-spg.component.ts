import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Customer } from 'src/app/model/models';
import { FileHelper } from 'src/app/helper/file-helper';

@Component({
  selector: 'app-react-spg',
  templateUrl: './react-spg.component.html',
  styleUrls: ['./react-spg.component.css']
})
export class ReactSpgComponent implements OnInit {

  fc: FormGroup;
  customer: Customer;
  fileHelper: FileHelper;

  constructor() {
    this.customer = new Customer();
    this.fileHelper = new FileHelper();
  }

  ngOnInit() {
    this.fc = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      gender: new FormControl(''),
      dob: new FormControl(''),
      mobile: new FormControl(''),
      email: new FormControl(''),
      image: new FormControl(''),
      job: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    });
  }

  onSubmit() {
    console.log(this.fc);
  }

  setValue() {
    this.fc.setValue({
      firstName: 'John',
      lastName: 'Marshal',
      gender: 'Male',
      dob: '2018-12-22',
      mobile: '9966558855',
      email: 'john@gmail.com',
      image: '',
      job: 'Employee',
      password: 'john',
      confirmPassword: 'john'
    });
  }

  patchValue() {
    this.fc.patchValue({
      firstName: 'Allen',
      lastName: 'Walker',
      email: 'allen@gmail.com'
    });
  }

  reset() {
    this.fc.reset({
      firstName: '',
      lastName: '',
      gender: '',
      dob: '',
      mobile: '',
      email: '',
      image: '',
      job: '',
      password: '',
      confirmPassword: ''
    });
  }

}
