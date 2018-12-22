import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Customer } from 'src/app/model/models';
import { FileHelper } from 'src/app/helper/file-helper';

@Component({
  selector: 'app-react-builder',
  templateUrl: './react-builder.component.html',
  styleUrls: ['./react-builder.component.css']
})
export class ReactBuilderComponent implements OnInit {

  fc: FormGroup;
  customer: Customer;
  fileHelper: FileHelper;

  constructor(private builder: FormBuilder) {
    this.customer = new Customer();
    this.fileHelper = new FileHelper();
  }

  ngOnInit() {
    this.fc = this.builder.group({
      firstName: '',
      lastName: { value: '', disabled: false },
      gender: [{ value: '', disabled: false }],
      dob: ['2018-01-01'],
      mobile: '',
      email: '',
      image: '',
      job: '',
      password: '',
      confirmPassword: ''
    });
  }

  onSubmit(){   
    console.log(this.fc);    
  }

}
