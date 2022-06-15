import { Component, OnInit } from '@angular/core';
interface value {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {
  PDF = false;
  DOCX = false;
  XLS = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  
  sortvalue: value[] = [
    {value: 'steak-0', viewValue: 'Select'},
    {value: 'pizza-1', viewValue: 'One'},
    {value: 'tacos-2', viewValue: 'Two'},
  ];

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
