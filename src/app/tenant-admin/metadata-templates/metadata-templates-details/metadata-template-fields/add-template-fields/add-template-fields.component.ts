import { Component, OnInit } from '@angular/core';

interface value {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-template-fields',
  templateUrl: './add-template-fields.component.html',
  styleUrls: ['./add-template-fields.component.scss']
})
export class AddTemplateFieldsComponent implements OnInit {
  sortvalue: value[] = [
    {value: 'Alphanumeric', viewValue: 'Alphanumeric'},
    {value: 'Numeric', viewValue: 'Numeric'},
    {value: 'Date', viewValue: 'Date'},
    {value: 'Lookup', viewValue: 'Lookup'},
    {value: 'Boolean', viewValue: 'Boolean'},
  ];
  
  selectedValue = '0';

 
  Default = false;
  constructor() { }

  ngOnInit(): void {
  }

}

