import {LiveAnnouncer} from '@angular/cdk/a11y';
import { Component, OnInit,ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { MatMenuTrigger } from '@angular/material/menu';
import {MatSort, Sort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import { RelatedFilesModalComponent } from './related-files-modal/related-files-modal.component';


export interface PeriodicElement {
position: number;
  checkbox: string;
  name: string;
  
  repository: string;
  folder: string;
  view: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1,checkbox:'',  name: 'file1.xls', repository:' Repository 1', folder: 'Folder 1',view:''},
  {position: 2,checkbox:'',   name: 'file2.PDF', repository:' Repository 2', folder: 'Folder 2',view:''},
  {position: 3,checkbox:'',   name: 'file3.xls', repository:' Repository 3', folder: 'Folder 3',view:''},
  {position: 4,checkbox:'',   name: 'file4.doc', repository:' Repository 4', folder: 'Folder 4',view:''},

];

@Component({
  selector: 'app-related-files',
  templateUrl: './related-files.component.html',
  styleUrls: ['./related-files.component.scss']
})
export class RelatedFilesComponent implements OnInit {

  displayedColumns: string[] = ['checkbox','name','repository','folder','view'];
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
    constructor(private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) {}
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

    addRelatedFiles() {
      const dialogRef = this.dialog.open(RelatedFilesModalComponent,{panelClass: 'full-screen-dialog'});
    }

}
