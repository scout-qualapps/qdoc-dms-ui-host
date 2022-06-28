import {LiveAnnouncer} from '@angular/cdk/a11y';
import { Component, OnInit,ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';

export interface PeriodicElement {
  position: number;
  checkbox: string;
  permission: string;
  description: string;
  isPrivilegesActive: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1,checkbox:'',  permission: 'View',  description:'View document', isPrivilegesActive: true},
  {position: 2,checkbox:'',  permission: 'Edit Metadata',  description:'Can change metadata',  isPrivilegesActive: true},
  {position: 3,checkbox:'',  permission: 'Share with external users',  description:' Can share content with external users',  isPrivilegesActive: true},
  {position: 4,checkbox:'',  permission: 'Print & Download',  description:'Can download document',  isPrivilegesActive: false},
  {position: 5,checkbox:'',  permission: 'View Confidential',  description:'Can view confidential document',  isPrivilegesActive: false},
  {position: 6,checkbox:'',  permission: 'User Maintenance',  description:'Can manage user and role',  isPrivilegesActive: false},
  {position: 7,checkbox:'',  permission: 'Upload Documents',  description:'Can upload Document and change metadata',  isPrivilegesActive: false},
 
];

@Component({
  selector: 'app-edit-privileges-modal',
  templateUrl: './edit-privileges-modal.component.html',
  styleUrls: ['./edit-privileges-modal.component.scss']
})
export class EditPrivilegesModalComponent implements OnInit {
  displayedColumns: string[] = ['checkbox','permission','description'];
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

