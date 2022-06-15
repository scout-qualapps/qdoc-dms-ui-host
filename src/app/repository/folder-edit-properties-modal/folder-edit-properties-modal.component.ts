import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

interface value {
  value: string;
  viewValue: string;
  className:string;
}
interface value {
  value: string;
  viewValue: string;
  className:string;
}

@Component({
  selector: 'app-folder-edit-properties-modal',
  templateUrl: './folder-edit-properties-modal.component.html',
  styleUrls: ['./folder-edit-properties-modal.component.scss']
})
export class FolderEditPropertiesModalComponent implements OnInit {
  isChecked:boolean;
  security = new FormControl();
  
  selected = new FormControl('Scanning');
  selected2 = new FormControl('Private');
  toppings = new FormControl();
  myControl = new FormControl();
  options: string[] = ['Jason, Doe', 'James, Smith', 'Srikanta, Prakash'];
  securityValue: value[] = [
    {value: 'visibility_off',className:'visibility-off', viewValue: 'Private'},
    {value: 'visibility', className:'visibility', viewValue: 'Public'},

  ];
  folderColor: value[] = [
    {value: 'Gold',className:'', viewValue: 'Gold'},
    {value: 'Red',className:'', viewValue: 'Red'},
    {value: 'Blue', className:'', viewValue: 'Blue'},
    {value: 'Green',className:'', viewValue: 'Green'},
  ];

  getSecurityTypeName(fileSrc: string) {
    const scc = this.securityValue.find(f=> f.value === fileSrc);
    return scc?.viewValue;
   }

  filteredOptions: Observable<string[]>;

  constructor() { }
 ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
    window.scroll(0, 0);
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
