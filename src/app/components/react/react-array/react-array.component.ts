import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from "@angular/forms";
import { Customer } from 'src/app/model/models';
import { FileHelper } from 'src/app/helper/file-helper';

@Component({
  selector: 'app-react-array',
  templateUrl: './react-array.component.html',
  styleUrls: ['./react-array.component.css']
})
export class ReactArrayComponent implements OnInit {

  fc: FormGroup;
  customer: Customer;
  fileHelper: FileHelper;

  constructor(private builder: FormBuilder) {
    this.customer = new Customer();
    this.fileHelper = new FileHelper();
  }

  // 4. Create a FormArray
  get phones() : FormArray {
    return <FormArray>this.fc.get('phones');
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
      confirmPassword: ['', [Validators.required]],
      otherPhone: false,
      // 4. Create a FormArray
      phones: this.builder.array([ this.buildPhone() ])
    });
  }

  onSubmit(){   
    console.log(this.fc);    
  }

  // 3. Refactor to make copies
  buildPhone(): FormGroup {
    return this.builder.group({
      code: '',
      phone: ''
    });
  }

  // 6. Duplicate the input element(s)
  onAddPhone(): void {
    this.phones.push(this.buildPhone());
  }

}
