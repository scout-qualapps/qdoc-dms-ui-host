import { Component, OnInit } from '@angular/core';

interface value {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-new-metadata-field-modal',
  templateUrl: './new-metadata-field-modal.component.html',
  styleUrls: ['./new-metadata-field-modal.component.scss']
})
export class NewMetadataFieldModalComponent implements OnInit {
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
