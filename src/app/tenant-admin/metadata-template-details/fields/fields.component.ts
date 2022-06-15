import { Component, ViewChild, ContentChildren, QueryList, forwardRef
} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragHandle} from '@angular/cdk/drag-drop';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import {MatTable} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { NewMetadataFieldModalComponent } from 'src/app/shared/new-metadata-field-modal/new-metadata-field-modal.component';



export interface PeriodicElement {
 dragicon: number;
 fieldname: string;
 datatype: string;
 mandatory: string;
 description: string;
 actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
 {dragicon: 1, fieldname: 'Source', datatype: 'Alphanumeric', mandatory: 'Yes', description:'Main source of the data', actions:'icon' },
 {dragicon: 2, fieldname: 'Expiry Date', datatype: 'Alphanumeric', mandatory: 'No', description:'Determines the validity period', actions:'icon'},
 {dragicon: 3, fieldname: 'Department', datatype: 'Alphanumeric', mandatory: 'Yes', description:'Inform department name', actions:'icon'},
 {dragicon: 4, fieldname: 'Notes', datatype: 'Alphanumeric', mandatory: 'No', description:'Additional notes describing data', actions:'icon'},
 {dragicon: 5, fieldname: 'Source 2', datatype: 'Alphanumeric 2', mandatory: 'No', description:'Inform department name', actions:'icon'},
];

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss']
})
export class FieldsComponent  {
  @ViewChild('table') table: MatTable<PeriodicElement>;
  displayedColumns: string[] = ['dragicon', 'fieldname', 'datatype', 'mandatory', 'description', 'actions'];
  dataSource = ELEMENT_DATA;
  constructor(private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) {}
  dropTable(event: CdkDragDrop<PeriodicElement[]>) {
    const prevIndex = this.dataSource.findIndex((d) => d === event.item.data);
    moveItemInArray(this.dataSource, prevIndex, event.currentIndex);
    this.table.renderRows();
  }
  openNewMetadataFieldModalDialog() {
    const dialogRef = this.dialog.open(NewMetadataFieldModalComponent,{panelClass: 'full-screen-dialog'});
  }
 }