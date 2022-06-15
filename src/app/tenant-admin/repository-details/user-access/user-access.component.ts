import {LiveAnnouncer} from '@angular/cdk/a11y';
import { Component, OnInit,ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { UserAccessModalComponent } from 'src/app/shared/user-access-modal/user-access-modal.component';

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
  {position: 2,checkbox:'',  name: 'Smith, Roy', role:' Write', effectivefrom:' 01/05/2022 3:30 PM', effectiveto: '01/05/2022 3:30 PM'},
  {position: 3,checkbox:'',  name: 'Amith, John',  role:' Owner', effectivefrom:' 01/05/2022 3:30 PM', effectiveto: '01/05/2022 3:30 PM'},
  {position: 4,checkbox:'', name: 'Jane, Doe', role:' Read-only', effectivefrom:' 01/05/2022 3:30 PM', effectiveto: '01/05/2022 3:30 PM'},
 
];

@Component({
  selector: 'app-user-access',
  templateUrl: './user-access.component.html',
  styleUrls: ['./user-access.component.scss']
})
export class UserAccessComponent implements OnInit {

 
  displayedColumns: string[] = ['checkbox','name','role','effectivefrom','effectiveto'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

   
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


  constructor(private _liveAnnouncer: LiveAnnouncer,public dialog: MatDialog) {}

    openUserAccessModalDialog() {
      const dialogRef = this.dialog.open(UserAccessModalComponent, {panelClass: 'full-screen-dialog'});
      dialogRef.afterClosed().subscribe(result => {
      });
    }
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
