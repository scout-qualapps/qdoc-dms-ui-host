import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { MatMenuTrigger } from '@angular/material/menu';
import {MatSort, Sort} from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { UserAccessModalComponent } from 'src/app/shared/user-access-modal/user-access-modal.component';
import {MatPaginator} from '@angular/material/paginator';
import { ViewUserModalComponent } from 'src/app/shared/view-user-modal/view-user-modal.component';

export interface PeriodicElement {
  position: number;
  checkbox: string;
  name: string;
  access: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1,checkbox:'',  name: 'Kaliyanni, Ragan',  access:' User'},
  {position: 2, checkbox:'', name: 'Kishoor, Kumar',  access:' User Admin'},
  {position: 3,checkbox:'', name: 'UMG, Das', access:' Repo Admin',},
  {position: 4, checkbox:'', name: 'Kaliyanni, Kutty',  access:' User'},
  {position: 5,checkbox:'',  name: 'Jhone, Bosai',  access:' User Admin'},
  {position: 6,checkbox:'', name: 'Kaliya, Murugan', access:' Repo Admin',},
 
];

@Component({
  selector: 'app-other-users-table',
  templateUrl: './other-users-table.component.html',
  styleUrls: ['./other-users-table.component.scss']
})
export class OtherUsersTableComponent {
  filterTerm!: string;
  
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  displayedColumns: string[] = ['checkbox','name','access'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;

 
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
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
