import { Component, OnInit,  ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { EditUserDetailsModalComponent } from './edit-user-details-modal/edit-user-details-modal.component';

export interface PeriodicElement {
  roleName: string;
  description: string;
  repositories: string;
  gridListNav: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {roleName: 'User',  description:' General user', repositories:'Repository 1, Repository 2, Repository 3', gridListNav: 'action'},
  {roleName: 'User Admin', description:'Manager users', repositories:'', gridListNav: 'action'},
  {roleName: 'Finance Repo Admin',  description:' Manage finance repo', repositories:'Repository 4, Repository 5, Repository 6', gridListNav: 'action'},
];


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  displayedColumns: string[] = ['roleName','description','repositories', 'gridListNav'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor(private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) {}
  
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }
  editUserDetailsModal() {
    const dialogRef = this.dialog.open(EditUserDetailsModalComponent,{panelClass: ['full-screen', 'medium-size-modal']});
  }

  sharedDocSortChange(sortState: Sort) {
  
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
