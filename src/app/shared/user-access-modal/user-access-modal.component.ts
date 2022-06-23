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
 
  separatorKeysCodes: number[] = [ENTER, COMMA];
  AdminUserCtrl = new FormControl();
  filteredAdminUser: Observable<string[]>;
  AdminUser: string[] = ['Praksh@gmail.com','Praksh@gmail.com'];
  allAdminUser: string[] = ['Jone@gmail.com', 'Praksh@gmail.com', 'Thomas@gmail.com ', 'Kumar@gmail.com', 'Vishanth@gmail.com'];

  @ViewChild('AdminUserInput') AdminUserInput: ElementRef<HTMLInputElement>;

  constructor() {
    this.filteredAdminUser = this.AdminUserCtrl.valueChanges.pipe(
      startWith(null),
      map((AdminUserName: string | null) => (AdminUserName ? this._filter(AdminUserName) : this.allAdminUser.slice())),
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our AdminUserName
    if (value) {
      this.AdminUser.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.AdminUserCtrl.setValue(null);
  }

  remove(AdminUserName: string): void {
    const index = this.AdminUser.indexOf(AdminUserName);

    if (index >= 0) {
      this.AdminUser.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.AdminUser.push(event.option.viewValue);
    this.AdminUserInput.nativeElement.value = '';
    this.AdminUserCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allAdminUser.filter(AdminUserName => AdminUserName.toLowerCase().includes(filterValue));
  }
  ngOnInit(): void {
   
  }

}
