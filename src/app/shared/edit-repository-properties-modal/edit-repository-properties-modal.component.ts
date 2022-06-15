import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
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
  selector: 'app-edit-repository-properties-modal',
  templateUrl: './edit-repository-properties-modal.component.html',
  styleUrls: ['./edit-repository-properties-modal.component.scss']
})
export class EditRepositoryPropertiesModalComponent implements OnInit {
  security = new FormControl();

  securityValue: value[] = [
    {value: 'visibility_off',className:'visibility-off', viewValue: 'Private'},
    {value: 'visibility', className:'visibility', viewValue: 'Public'},

  ];

  getSecurityTypeName(fileSrc: string) {
    const scc = this.securityValue.find(f=> f.value === fileSrc);
    return scc?.viewValue;
   }

  separatorKeysCodes: number[] = [ENTER, COMMA];
  AdminUserCtrl = new FormControl();
  filteredAdminUser: Observable<string[]>;
  AdminUser: string[] = ['Praksh, Kumar'];
  allAdminUser: string[] = ['Jone, Jose', 'Praksh, Kumar', 'Thomas, Jone ', 'Kumar, Ravan', 'Vishanth, Jain'];

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
