import {
  Component, ViewChild} from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragHandle } from '@angular/cdk/drag-drop';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddNewValueComponent } from '../add-new-value/add-new-value.component';

export interface PeriodicElement {
  dragicon: number;
  displayText: string;
  lookupValue: string;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { dragicon: 1, displayText: 'Finance', lookupValue: "Finance", actions: 'icon' },
  { dragicon: 1, displayText: 'Public', lookupValue: "Public", actions: 'icon' },
];

@Component({
  selector: 'app-lookup-options',
  templateUrl: './lookup-options.component.html',
  styleUrls: ['./lookup-options.component.scss']
})
export class LookupOptionsComponent {
  @ViewChild('table') table: MatTable<PeriodicElement>;
  displayedColumns: string[] = ['dragicon', 'displayText', 'lookupValue', 'actions'];
  dataSource = ELEMENT_DATA;
  constructor(private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) { }
  dropTable(event: CdkDragDrop<PeriodicElement[]>) {
    const prevIndex = this.dataSource.findIndex((d) => d === event.item.data);
    moveItemInArray(this.dataSource, prevIndex, event.currentIndex);
    this.table.renderRows();
  }
  openAddNewModal() {
    const dialogRef = this.dialog.open(AddNewValueComponent, { panelClass: 'full-screen-dialog' });
  }
}
