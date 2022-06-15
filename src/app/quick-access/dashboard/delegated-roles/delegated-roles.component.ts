import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

export interface PeriodicElement {
  role: string;
  startdate: string;
  enddate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {role: 'Role 1',  startdate:' 01/04/2022', enddate:' 01/05/2022'},
  {role: 'Role 2', startdate:' 02/04/2022', enddate:' 01/05/2022 '},
  {role: 'Role 3',  startdate:' 02/04/2022', enddate:' 01/05/2022'},
  {role: 'Role 4',  startdate:' 02/03/2022', enddate:' 01/04/2022'},
];


@Component({
  selector: 'app-delegated-roles',
  templateUrl: './delegated-roles.component.html',
  styleUrls: ['./delegated-roles.component.scss']
})
export class DelegatedRolesComponent implements OnInit {

  displayedColumns: string[] = ['role','startdate','enddate'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  
  constructor(private _liveAnnouncer: LiveAnnouncer) {}
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
  }

  delrolDocSortChange(sortState: Sort) {
  
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }


}

