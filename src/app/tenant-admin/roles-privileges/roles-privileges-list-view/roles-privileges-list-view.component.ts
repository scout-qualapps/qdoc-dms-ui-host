import {LiveAnnouncer} from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

export interface PeriodicElement {
  position: number;
  RoleName: string;
  Description: string;
  DateModified: string;
  ModifiedBy: string;
  gridListNav: string;
  isSystemRole: boolean;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1,  RoleName: 'User Admin', Description: "Manage users", DateModified: '01/05/2022 3:30 PM', ModifiedBy: 'John, Doe', gridListNav:'action', isSystemRole: false},
  {position: 2, RoleName: 'Repo Admin',Description: "Manage any repo",  DateModified: '01/05/2022 3:31 PM', ModifiedBy: 'Jone, Adam', gridListNav:'action', isSystemRole: false},
  {position: 3, RoleName: 'Finance Repo Admin' ,Description: "Manage Finance repo", DateModified: '01/05/2022 3:32 PM', ModifiedBy: 'Jone, Adam ', gridListNav:'action', isSystemRole: false},
  {position: 4, RoleName: 'HR Repo Admin', Description: "Manage HR repo", DateModified: '01/06/2022 3:33 PM', ModifiedBy: 'Jone, Adam', gridListNav:'action', isSystemRole: true},
  {position: 5,  RoleName: 'User', Description: "General user", DateModified: '01/06/2022 3:35 PM', ModifiedBy: 'Jone, Adam', gridListNav:'action', isSystemRole: true},

];

@Component({
  selector: 'app-roles-privileges-list-view',
  templateUrl: './roles-privileges-list-view.component.html',
  styleUrls: ['./roles-privileges-list-view.component.scss']
})
export class RolesPrivilegesListViewComponent implements OnInit {

  displayedColumns: string[] = ['checkbox','RoleName', 'Description', 'DateModified', 'ModifiedBy','gridListNav'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  clickedRows = new Set<PeriodicElement>();
  selection = new SelectionModel<PeriodicElement>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  contextMenuPosition = { x: '0px', y: '0px' };

  @ViewChild(MatMenuTrigger, { static: true }) contextMenu!: MatMenuTrigger;
  selectedPosition: number = 0;
  onContextMenu(event: MouseEvent, row: any) {
    this.selectedPosition=row.position;
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.openMenu();
  }

  selctedMenuPosition(element: any){
    this.selectedPosition=element.position;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.filter(f=>!f.isSystemRole).length;
    const numRows = this.dataSource.data.filter(f=>!f.isSystemRole).length;
    return numSelected === numRows;
  }
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.dataSource.data.forEach(f=>{
      if(!f.isSystemRole){
        this.selection.select(f);
      }
    });
  }
  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

   constructor(private _liveAnnouncer: LiveAnnouncer) {}
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

