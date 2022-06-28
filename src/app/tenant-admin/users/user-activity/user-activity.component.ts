import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  position: number;
  activity: string;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, activity: 'Login', date: '01/05/2022 3:30 PM' },
  { position: 1, activity: 'Add Repository', date: '01/05/2022 3:31 PM' },
  { position: 1, activity: 'Share File', date: '01/05/2022 3:32 PM' },
  { position: 1, activity: 'View File', date: '01/05/2022 3:33 PM' },
  { position: 1, activity: 'Delete File', date: '01/05/2022 3:34 PM' },
  { position: 1, activity: 'Add Metadata', date: '01/05/2022 3:35 PM' },
  { position: 1, activity: 'Add File', date: '01/05/2022 3:36 PM' },
  { position: 1, activity: 'Comment', date: '01/05/2022 3:37 PM' },


];

@Component({
  selector: 'app-user-activity',
  templateUrl: './user-activity.component.html',
  styleUrls: ['./user-activity.component.scss']
})
export class UserActivityComponent implements OnInit {


  displayedColumns: string[] = ['activity', 'date'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _liveAnnouncer: LiveAnnouncer) { }

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  announceSortChange(sortState: Sort) {

    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}

