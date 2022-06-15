import {LiveAnnouncer} from '@angular/cdk/a11y';
import { Component, OnInit,ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';

export interface PeriodicElement {
  position: number;
  checkbox: string;
  name: string;
  role: string;
  effectivefrom: string;
  effectiveto: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1,checkbox:'',  name: 'John, Doe',  role:' Owner', effectivefrom:' 01/05/2022 3:30 PM', effectiveto: '01/05/2022 3:30 PM'},
  {position: 2,checkbox:'',  name: 'Amith, John', role:' Write', effectivefrom:' 01/05/2022 3:30 PM', effectiveto: '01/05/2022 3:30 PM'},
  {position: 3,checkbox:'',  name: 'Smith, Roy',  role:' Owner', effectivefrom:' 01/05/2022 3:30 PM', effectiveto: '01/05/2022 3:30 PM'},
  {position: 4,checkbox:'', name: 'Jane, Doe', role:' Read-only', effectivefrom:' 01/05/2022 3:30 PM', effectiveto: '01/05/2022 3:30 PM'},
 
];

@Component({
  selector: 'app-repo-user-access',
  templateUrl: './repository-user-access.component.html',
  styleUrls: ['./repository-user-access.component.scss']
})
export class RepoUserAccessComponent implements OnInit {

 
  displayedColumns: string[] = ['name','role','effectivefrom','effectiveto'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);




  constructor(private _liveAnnouncer: LiveAnnouncer) {}
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
  }

  announceSortChange(sortState: Sort) {
  
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
