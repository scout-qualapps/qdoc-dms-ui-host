import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';



interface value {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  sortvalue: value[] = [
    {value: 'BlueOcean', viewValue: 'Blue Ocean'},
    {value: 'Lightred', viewValue: 'Light Red'},
    {value: 'LightGreen', viewValue: 'Light Gren'},
 
  ];

  constructor() {}
  


  selectedValue = '0';

 
  Default = false;
  ngOnInit() {
   
  }
  

}
