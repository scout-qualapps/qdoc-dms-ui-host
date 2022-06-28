import {LiveAnnouncer} from '@angular/cdk/a11y';
import { Component, OnInit,ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { MatMenuTrigger } from '@angular/material/menu';
import {MatSort, Sort} from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ViewUserModalComponent } from 'src/app/tenant-admin/user-access-details/view-user-modal/view-user-modal.component';
 import { UserAccessModalComponent } from 'src/app/tenant-admin/user-access-details/user-access-modal/user-access-modal.component';

 import {MatPaginator} from '@angular/material/paginator';


export interface PeriodicElement {
  position: number;
  checkbox: string;
  name: string;
  access: string;
  effectivefrom: string;
  effectiveto: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1,checkbox:'',  name: 'Kaliyanni, Ragan',  access:' User', effectivefrom:' 01/05/2022 3:30 PM', effectiveto: '01/02/2022 3:30 PM', action: ''},
  {position: 2,checkbox:'',  name: 'Kutty, Mohan', access:' Editor', effectivefrom:' 01/05/2022 3:30 PM', effectiveto: '01/04/2022 3:30 PM',action: ''},
  {position: 3,checkbox:'',  name: 'Kishoor, Kumar',  access:' Repo Admin', effectivefrom:' 02/05/2022 3:30 PM', effectiveto: '01/05/2022 3:30 PM',action: ''},
  {position: 4,checkbox:'', name: 'UMG, Das', access:' Editor', effectivefrom:' 01/06/2022 3:30 PM', effectiveto: '08/05/2022 3:30 PM',action: ''},
 
];
@Component({
  selector: 'app-repository-users-table',
  templateUrl: './repository-users-table.component.html',
  styleUrls: ['./repository-users-table.component.scss']
})
export class RepositoryUsersTableComponent implements OnInit {

  displayedColumns: string[] = ['checkbox','name','access','effectivefrom','effectiveto','action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  openUserAccessModalDialog() {
    const dialogRef = this.dialog.open(UserAccessModalComponent, {panelClass: 'full-screen-dialog'});
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  ViewUserModalDialog() {
    const dialogRef = this.dialog.open(ViewUserModalComponent, {panelClass: 'full-screen-dialog'});
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }

    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: PeriodicElement): string {
      if (!row) {
        return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
      }
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }


    constructor(private _liveAnnouncer: LiveAnnouncer,public dialog: MatDialog) {}

 
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
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
