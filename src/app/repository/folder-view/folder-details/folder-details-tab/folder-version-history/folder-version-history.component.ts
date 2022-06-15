import {LiveAnnouncer} from '@angular/cdk/a11y';
import { Component, OnInit,ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { MatMenuTrigger } from '@angular/material/menu';
import {MatSort, Sort} from '@angular/material/sort';

export interface PeriodicElement {
  position: number;
  checkbox: string;
  name: string;
  action:string;
  date: string;
  download: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1,checkbox:'',   name: 'Kishoor, Kumar', action:' Created',  date:' 01/05/2022 3:30 PM', download: '01/05/2022 3:30 PM'},
  {position: 2,checkbox:'',   name: 'Ani, Jone', action:' Modified', date:' 01/05/2022 3:30 PM', download: '01/05/2022 3:30 PM'},
  {position: 3,checkbox:'',   name: 'Kummar, Lal', action:' Modified',  date:' 01/05/2022 3:30 PM', download: '01/05/2022 3:30 PM'},
  {position: 4,checkbox:'',  name: 'Kutty, Munni', action:' Created',  date:' 01/05/2022 3:30 PM', download: '01/05/2022 3:30 PM'},
 
  {position: 2,checkbox:'',   name: 'Ani, Jone', action:' Modified', date:' 01/05/2022 3:30 PM', download: '01/05/2022 3:30 PM'},
  {position: 3,checkbox:'',   name: 'Kummar, Lal', action:' Modified',  date:' 01/05/2022 3:30 PM', download: '01/05/2022 3:30 PM'},
  {position: 4,checkbox:'',  name: 'Kutty, Munni', action:' Created',  date:' 01/05/2022 3:30 PM', download: '01/05/2022 3:30 PM'},
 
  {position: 2,checkbox:'',   name: 'Ani, Jone', action:' Modified', date:' 01/05/2022 3:30 PM', download: '01/05/2022 3:30 PM'},
  {position: 3,checkbox:'',   name: 'Kummar, Lal', action:' Modified',  date:' 01/05/2022 3:30 PM', download: '01/05/2022 3:30 PM'},
  {position: 4,checkbox:'',  name: 'Kutty, Munni', action:' Created',  date:' 01/05/2022 3:30 PM', download: '01/05/2022 3:30 PM'},
 
  {position: 2,checkbox:'',   name: 'Ani, Jone', action:' Modified', date:' 01/05/2022 3:30 PM', download: '01/05/2022 3:30 PM'},
  {position: 3,checkbox:'',   name: 'Kummar, Lal', action:' Modified',  date:' 01/05/2022 3:30 PM', download: '01/05/2022 3:30 PM'},
  {position: 4,checkbox:'',  name: 'Kutty, Munni', action:' Created',  date:' 01/05/2022 3:30 PM', download: '01/05/2022 3:30 PM'},
 
];

@Component({
  selector: 'app-folder-version-history',
  templateUrl: './folder-version-history.component.html',
  styleUrls: ['./folder-version-history.component.scss']
})
export class FolderVersionHistoryComponent implements OnInit {

  displayedColumns: string[] = ['action','name', 'date','download'];
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
