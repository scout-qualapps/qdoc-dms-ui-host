import { LiveAnnouncer } from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
export interface PeriodicElement {
  position: number;
  userName: string;
  emailAddress: string;
  status: string;
  dateCreated: string;
  lastLogin: string;
  gridListNav: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, userName: 'John, Doe', emailAddress: "john.doe@dms.com", status: 'Active', dateCreated: '01/05/2022 3:30 PM', lastLogin: '01/05/2022 3:35 PM', gridListNav: 'gg' },
  { position: 2, userName: 'Jone, Adam', emailAddress: "john.adam@dms.com", status: 'Inactive', dateCreated: '01/05/2022 3:30 PM', lastLogin: '01/05/2022 3:35 PM', gridListNav: 'gg' },
  { position: 3, userName: 'Amith, John', emailAddress: "amith.john@dms.com", status: 'Inactive',  dateCreated: '01/05/2022 3:30 PM', lastLogin: '01/05/2022 3:35 PM', gridListNav: 'gg' },
  { position: 4, userName: 'Smith, Roy', emailAddress: "smitha.roy@dms.com", status: 'Inactive', dateCreated: '01/06/2022 3:30 PM', lastLogin: '01/05/2022 3:35 PM', gridListNav: 'gg' },
  { position: 5, userName: 'Bangera, Agasthya', emailAddress: "agatshya.udupi@dms.com", status: 'Active', dateCreated: '01/06/2022 3:30 PM', lastLogin: '01/05/2022 3:35 PM', gridListNav: 'gg' },
  { position: 6, userName: 'Kotian, Asha', emailAddress: "asha.kotian@dms.com", status: 'Inactive',  dateCreated: '01/04/2022 3:30 PM', lastLogin: '01/05/2022 3:35 PM', gridListNav: 'gg' },
  { position: 7, userName: 'Udupi, Rithesh', emailAddress: "rithesh.udupi@dms.com", status: 'Active', dateCreated: '01/05/2022 3:30 PM', lastLogin: '01/05/2022 3:35 PM', gridListNav: 'gg' },
  { position: 8, userName: 'Vengara, Sadik', emailAddress: "sadik.vengara@dms.com", status: 'Active', dateCreated: '01/05/2022 3:30 PM', lastLogin: '01/05/2022 3:35 PM', gridListNav: 'gg' },
  { position: 9, userName: 'Smith, Raghu', emailAddress: "smitha.raghu@dms.com", status: 'Inactive', dateCreated: '01/03/2022 3:30 PM', lastLogin: '01/05/2022 3:35 PM', gridListNav: 'gg' },

];

@Component({
  selector: 'app-user-list-view',
  templateUrl: './user-list-view.component.html',
  styleUrls: ['./user-list-view.component.scss']
})
export class UserListViewComponent implements OnInit {
  
  displayedColumns: string[] = ['checkbox', 'userName', 'emailAddress', 'status', 'dateCreated', 'lastLogin', 'gridListNav'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  clickedRows = new Set<PeriodicElement>();
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

  contextMenuPosition = { x: '0px', y: '0px' };

  @ViewChild(MatMenuTrigger, { static: true }) contextMenu!: MatMenuTrigger;
  selectedPosition: number = 0;
  onContextMenu(event: MouseEvent, row: any) {

    this.selectedPosition = row.position;
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    
    this.contextMenu.openMenu();
  }

  selctedMenuPosition(element: any) {
    this.selectedPosition = element.position;
  }

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

