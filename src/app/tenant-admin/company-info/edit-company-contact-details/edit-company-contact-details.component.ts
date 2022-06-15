import { Component, OnInit } from '@angular/core';
import {FormControl,Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

interface value {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-edit-company-contact-details',
  templateUrl: './edit-company-contact-details.component.html',
  styleUrls: ['./edit-company-contact-details.component.scss']
})
export class EditCompanyContactDetailsComponent implements OnInit {

  stateList = new FormControl();
  statevalueValue: value[] = [
    {value: 'Alabama', viewValue: 'Alabama'},
    {value: ' Alaska', viewValue: ' Alaska'},
    {value: 'California', viewValue: 'California'},
    {value: 'Florida', viewValue: 'Florida'},
    {value: 'Georgia', viewValue: 'Georgia'},
    {value: 'New Jersey', viewValue: 'New Jersey'},
    {value: 'Texas', viewValue: 'Texas'},
    {value: 'Oklahoma', viewValue: 'Oklahoma'},
    {value: 'Washington', viewValue: 'Washington'},

  ];
  selectedValue =  'California';


  constructor() { }
 ngOnInit(): void {
 
  }
 
}
