import {LiveAnnouncer} from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MoveCopyModalComponent } from 'src/app/shared/move-copy-modal/move-copy-modal.component';
export interface PeriodicElement {

  position: number;
  RepositoryName: string;
  Security: string;
  DateModified: string;
  ModifiedBy: string;
  gridListNav: string;
}



const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1,  RepositoryName: 'Repository 1', Security: "Private", DateModified: '01/05/2022 3:30 PM', ModifiedBy: 'John, Doe', gridListNav:'gg'},
  {position: 2, RepositoryName: 'Repository 2',Security: "Private",  DateModified: '01/05/2022 3:30 PM', ModifiedBy: 'Jone, Adam', gridListNav:'gg'},
  {position: 3, RepositoryName: 'Repository 3' ,Security: "Public", DateModified: '01/05/2022 3:30 PM', ModifiedBy: 'Jone, Adam ', gridListNav:'gg'},
  {position: 4, RepositoryName: 'Repository 4', Security: "Private", DateModified: '01/06/2022 3:30 PM', ModifiedBy: 'Jone, Adam', gridListNav:'gg'},
  {position: 5,  RepositoryName: 'Repository 5', Security: "Public", DateModified: '01/06/2022 3:30 PM', ModifiedBy: 'Jone, Adam', gridListNav:'gg'},
  {position: 6, RepositoryName: 'Repository 6', Security: "Private", DateModified: '01/04/2022 3:30 PM', ModifiedBy: 'Jone, Adam', gridListNav:'gg'},
  {position: 7,  RepositoryName: 'Repository 7',  Security: "Public", DateModified: '01/05/2022 3:30 PM', ModifiedBy: 'Jone, Adam', gridListNav:'gg'},
  {position: 8,  RepositoryName: 'Repository 8', Security: "Private", DateModified: '01/05/2022 3:30 PM', ModifiedBy: 'Jone, Adam', gridListNav:'gg'},
  {position: 9,  RepositoryName: 'Repository 9',   Security: "Private", DateModified: '01/03/2022 3:30 PM', ModifiedBy: 'Jone, Adam', gridListNav:'gg'},

];



@Component({
  selector: 'app-manage-repository',
  templateUrl: './manage-repository.component.html',
  styleUrls: ['./manage-repository.component.scss']
})
export class ManageRepositoryComponent implements OnInit {

  displayedColumns: string[] = ['checkbox','RepositoryName', 'Security', 'DateModified', 'ModifiedBy','gridListNav'];
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
    
    this.selectedPosition=row.position;
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.openMenu();
  }

  selctedMenuPosition(element: any){
    this.selectedPosition=element.position;
  }

   constructor(private _liveAnnouncer: LiveAnnouncer,public dialog: MatDialog) {}
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  openMoveCopyDialog() {
    const dialogRef = this.dialog.open(MoveCopyModalComponent, {panelClass: 'custon-width-md'});
    

    dialogRef.afterClosed().subscribe(result => {
     
    });
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
