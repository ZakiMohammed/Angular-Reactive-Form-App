import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/models';
import { FileHelper } from 'src/app/helper/file-helper';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  customer: Customer;
  fileHelper: FileHelper;

  constructor() {
    this.customer = new Customer();
    this.fileHelper = new FileHelper();
  }

  ngOnInit() {
  }

  onSubmit(templateForm){   
    console.log(this.fileHelper.fileName);
    console.log(templateForm);
  }

}
