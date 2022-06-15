import { Component, OnInit } from '@angular/core';

interface value {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-edit-template-fields',
  templateUrl: './edit-template-fields.component.html',
  styleUrls: ['./edit-template-fields.component.scss']
})
export class EditTemplateFieldsComponent implements OnInit {
  sortvalue: value[] = [
    {value: 'Alphanumeric', viewValue: 'Alphanumeric'},
    {value: 'Numeric', viewValue: 'Numeric'},
    {value: 'Date', viewValue: 'Date'},
    {value: 'Lookup', viewValue: 'Lookup'},
    {value: 'Boolean', viewValue: 'Boolean'},
  ];
  
  selectedValue = '0';
  isChecked:boolean;
 
  Default = false;
  constructor() { }

  ngOnInit(): void {
    this.isChecked = true; 
  }
}

