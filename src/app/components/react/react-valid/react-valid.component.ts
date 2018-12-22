import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from 'src/app/model/models';
import { FileHelper } from 'src/app/helper/file-helper';

@Component({
  selector: 'app-react-valid',
  templateUrl: './react-valid.component.html',
  styleUrls: ['./react-valid.component.css']
})
export class ReactValidComponent implements OnInit {

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
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  onSubmit(){   
    console.log(this.fc);    
  }

}
