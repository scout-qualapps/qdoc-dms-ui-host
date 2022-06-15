import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
interface value {
  value: string;
  viewValue: string;
  className:string;
}
@Component({
  selector: 'app-new-folder',
  templateUrl: './new-folder.component.html',
  styleUrls: ['./new-folder.component.scss']
})
export class NewFolderComponent implements OnInit {

  isChecked:boolean;
 
  Default = false;
  toppings = new FormControl();
  security = new FormControl();
  sortvalue: value[] = [
    {value: 'steak-0',className:'', viewValue: 'Select'},
    {value: 'pizza-1',className:'', viewValue: 'One'},
    {value: 'tacos-2', className:'', viewValue: 'Two'},
  ];
  securityValue: value[] = [
    {value: 'visibility_off', className:'visibility-off', viewValue: 'Private'},
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
  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
