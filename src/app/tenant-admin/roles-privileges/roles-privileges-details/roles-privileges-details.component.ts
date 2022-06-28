import {LiveAnnouncer} from '@angular/cdk/a11y';
import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import { MatDialog} from '@angular/material/dialog';
import { EditRolesPrivilegesModalComponent } from '../edit-roles-privileges-modal/edit-roles-privileges-modal.component';
import { EditPrivilegesModalComponent } from '../edit-privileges-modal/edit-privileges-modal.component';

export interface PeriodicElement {
  position: number;
  permission: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, permission: 'View',  description:'View document',},
  {position: 2, permission: 'Edit Metadata',  description:'Can change metadata',},
  {position: 7, permission: 'Share with external users',  description:' Can share content with external users',},
];

@Component({
  selector: 'app-roles-privileges-details',
  templateUrl: './roles-privileges-details.component.html',
  styleUrls: ['./roles-privileges-details.component.scss']
})
export class RolesPrivilegesDetailsComponent implements OnInit {

  displayedColumns: string[] = ['permission','description'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
   
  constructor(private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) { }
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
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

  editRolesPrivilegesModal() {
    const dialogRef = this.dialog.open(EditRolesPrivilegesModalComponent,{panelClass: 'full-screen-dialog'});
  }
  editPrivilegesModal() {
    const dialogRef = this.dialog.open(EditPrivilegesModalComponent,{panelClass: ['full-screen', 'medium-size-modal']});
  }
}
