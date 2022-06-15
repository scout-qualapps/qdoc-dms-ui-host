import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

export interface PeriodicElement {
  file: string;
  sharedby: string;
  expirydate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {file: 'file1.xls',  sharedby:' Smith, John', expirydate:' 01/05/2022 3:30 PM'},
  {file: 'file2.xls', sharedby:' Jones, David', expirydate:' 01/05/2022 3:30 PM'},
  {file: 'file3.xls',  sharedby:' Brown, Michel', expirydate:' 01/05/2022 3:10 PM'},
  {file: 'file4.xls',  sharedby:' Doe, John', expirydate:' 01/04/2022 3:30 PM'},
];


@Component({
  selector: 'app-shared-documents',
  templateUrl: './shared-documents.component.html',
  styleUrls: ['./shared-documents.component.scss']
})
export class SharedDocumentsComponent implements OnInit {

  displayedColumns: string[] = ['file','sharedby','expirydate'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
  }

  sharedDocSortChange(sortState: Sort) {
  
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }


}
