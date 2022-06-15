import { LiveAnnouncer } from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
export interface PeriodicElement {

  position: number;
  TemplateName: string;
  Type: string;
  DateModified: string;
  ModifiedBy: string;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, TemplateName: 'Department Data', Type: "Content", DateModified: '01/05/2022 3:30 PM ', ModifiedBy: 'John, Doe', actions: 'action' },
  { position: 2, TemplateName: 'Financial Data', Type: "Repository", DateModified: '01/05/2022 3:30 PM', ModifiedBy: 'Jone, Adam', actions: 'action' },
  { position: 3, TemplateName: 'Department Data 2', Type: "Content", DateModified: '01/05/2022 3:30 PM', ModifiedBy: 'Jone, Adam ', actions: 'action' },
  { position: 4, TemplateName: 'Department Data 3', Type: "Repository", DateModified: '01/06/2022 3:30 PM', ModifiedBy: 'Jone, Adam', actions: 'action' },
  { position: 5, TemplateName: 'Department Data 4', Type: "Content", DateModified: '01/06/2022 3:30 PM', ModifiedBy: 'Jone, Adam', actions: 'action' },
  { position: 6, TemplateName: 'Financial Data 2', Type: "Repository", DateModified: '01/04/2022 3:30 PM', ModifiedBy: 'Jone, Adam', actions: 'action' },
  { position: 7, TemplateName: 'Financial Data 3', Type: "Content", DateModified: '01/05/2022 3:30 PM', ModifiedBy: 'Jone, Adam', actions: 'action' },
  { position: 8, TemplateName: 'Financial Data 4', Type: "Repository", DateModified: '01/05/2022 3:30 PM', ModifiedBy: 'Jone, Adam', actions: 'action' },
  { position: 9, TemplateName: 'Financial Data 5', Type: "Content", DateModified: '01/03/2022 3:30 PM', ModifiedBy: 'Jone, Adam', actions: 'action' },

];


@Component({
  selector: 'app-metadata-templates-list',
  templateUrl: './metadata-templates-list.component.html',
  styleUrls: ['./metadata-templates-list.component.scss']
})
export class MetadataTemplatesListComponent implements OnInit {

  displayedColumns: string[] = ['checkbox', 'TemplateName', 'Type', 'DateModified', 'ModifiedBy', 'actions'];
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




