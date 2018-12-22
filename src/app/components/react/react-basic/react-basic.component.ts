import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Customer } from 'src/app/model/models';
import { FileHelper } from 'src/app/helper/file-helper';

@Component({
  selector: 'app-react-basic',
  templateUrl: './react-basic.component.html',
  styleUrls: ['./react-basic.component.css']
})
export class ReactBasicComponent implements OnInit {

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

  onSubmit(){   
    console.log(this.fc);    
  }

}
