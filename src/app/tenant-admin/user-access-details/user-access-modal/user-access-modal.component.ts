import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { ElementRef, ViewChild } from '@angular/core';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';


interface value {
  value: string;
  viewValue: string;
  className:string;
}

@Component({
  selector: 'app-user-access-modal',
  templateUrl: './user-access-modal.component.html',
  styleUrls: ['./user-access-modal.component.scss']
})
export class UserAccessModalComponent implements OnInit {

 
  sortvalue: value[] = [
    {value: 'User', viewValue: 'User',className:''},
    {value: 'UserAdmin', viewValue: 'User Admin',className:''},
    {value: 'RepoAdmin', viewValue: 'Repo Admin',className:''},
    {value: 'FinanceRepoAdmin', viewValue: 'Finance Repo Admin',className:''},
    {value: 'HRRepoAdmin', viewValue: 'HR Repo Admin',className:''},
  ];
  selectedValue = '0';

 

  Readonly = false;
  Write = false;
  Print = false;
  Download = false;
  Default = true;
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
 


  @ViewChild('AdminUserInput') AdminUserInput: ElementRef<HTMLInputElement>;

  constructor() {
  
  }



  ngOnInit(): void {
   
  }


}
