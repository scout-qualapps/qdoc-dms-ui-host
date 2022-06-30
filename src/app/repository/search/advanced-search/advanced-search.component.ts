import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
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
  
  Source = new FormControl();
  Department = new FormControl();
  Correspondence = new FormControl();

  SourceList: string[] = ['Scanning', 'Email'];
  DepartmentList: string[] = ['Finance', 'Public'];
  CorrespondenceList: string[] = ['Phone', 'Email'];

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
