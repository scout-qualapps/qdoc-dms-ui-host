import { Component, ViewChild, ContentChildren, QueryList, forwardRef
} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragHandle} from '@angular/cdk/drag-drop';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import {MatTable} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';
interface value {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  dragicon: number;
  fieldname: string;
  actions: string;
 }
 const ELEMENT_DATA: PeriodicElement[] = [
  {dragicon: 1, fieldname: '',  actions:'icon' },
  {dragicon: 2, fieldname: ' ', actions:'icon'},
  {dragicon: 3, fieldname: '', actions:'icon'},
  {dragicon: 4, fieldname: '', actions:'icon'},
  {dragicon: 5, fieldname: '', actions:'icon'},

 ];
@Component({
  selector: 'app-configure-columns-modal',
  templateUrl: './configure-columns-modal.component.html',
  styleUrls: ['./configure-columns-modal.component.scss']
})
export class ConfigureColumnsModalComponent   {
  @ViewChild('table') table: MatTable<PeriodicElement>;
  displayedColumns: string[] = ['dragicon', 'fieldname',  'actions'];
  dataSource = ELEMENT_DATA;
  constructor(private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) {}
  dropTable(event: CdkDragDrop<PeriodicElement[]>) {
    const prevIndex = this.dataSource.findIndex((d) => d === event.item.data);
    moveItemInArray(this.dataSource, prevIndex, event.currentIndex);
    this.table.renderRows();
  }
 
  stateList = new FormControl();
  statevalueValue: value[] = [
    {value: 'File/Folder Name', viewValue: 'File/Folder Name'},
    {value: ' Date Modified', viewValue: 'Date Modified'},
    {value: 'Tags', viewValue: 'Tags'},

  ];
  selectedValue = 'California';

  ngOnInit() {
	
  
	}

  comparer(o1: any, o2: any): boolean {
    // if possible compare by object's name, and not by reference.
    return o1 && o2 ? o1.label === o2.label : o2 === o2;
  }

}
