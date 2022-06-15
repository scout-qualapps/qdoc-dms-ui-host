import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

import {  ViewChild, ContentChildren, QueryList, forwardRef
} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import { transferArrayItem, CdkDragHandle} from '@angular/cdk/drag-drop';
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
  reponame: string;
  actions: string;
  public: string;
 }
 const ELEMENT_DATA: PeriodicElement[] = [
  {dragicon: 1, reponame: 'Repository 1',  public: '',  actions:'icon' },
  {dragicon: 2, reponame: ' Repository 2',public: 'public', actions:'icon'},
  {dragicon: 3, reponame: 'Repository 3', public: '', actions:'icon'},
  {dragicon: 4, reponame: 'Repository 4', public: 'public',actions:'icon'},
  {dragicon: 5, reponame: 'Repository 5', public: '', actions:'icon'},

 ];
@Component({
  selector: 'app-repositories-order-modal',
  templateUrl: './repositories-order-modal.component.html',
  styleUrls: ['./repositories-order-modal.component.scss']
})
export class RepositoriesOrderModalComponent implements OnInit {
 
  data = [
    {
      content: ' <div class="drag-repository-block"> <img class="drag" src="assets/images/drag-icon.svg"> <div class="px-2 details"> <h3>Repository 1  <img class="public-icon" src="assets/images/public-icon.svg"></h3>  Created by <span class="bold"> Srikanta Prakash </span>  on 12/03/2021 11:50 </div> </div>'
    },
    {
      content: ' <div class="drag-repository-block"> <img class="drag" src="assets/images/drag-icon.svg"> <div class="px-2 details"> <h3>Repository 2  <img class="private-icon" src="assets/images/private-icon.svg"></h3>  Created by <span class="bold"> Srikanta Prakash </span>  on 12/03/2021 11:50 </div> </div>'
   
    },
    {
      content: ' <div class="drag-repository-block"> <img class="drag" src="assets/images/drag-icon.svg"> <div class="px-2 details"> <h3>Repository 3  <img class="public-icon" src="assets/images/public-icon.svg"></h3>  Created by <span class="bold"> Srikanta Prakash </span>  on 12/03/2021 11:50 </div> </div>'
   
    },
    {
      content: ' <div class="drag-repository-block"> <img class="drag" src="assets/images/drag-icon.svg"> <div class="px-2 details"> <h3>Repository 4  <img class="public-icon" src="assets/images/public-icon.svg"></h3>  Created by <span class="bold"> Srikanta Prakash </span>  on 12/03/2021 11:50 </div> </div>'
   
    }
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
  }

  @ViewChild('table') table: MatTable<PeriodicElement>;
  displayedColumns: string[] = ['dragicon', 'fieldname'];
  dataSource = ELEMENT_DATA;
  constructor(private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) {}
  dropTable(event: CdkDragDrop<PeriodicElement[]>) {
    const prevIndex = this.dataSource.findIndex((d) => d === event.item.data);
    moveItemInArray(this.dataSource, prevIndex, event.currentIndex);
    this.table.renderRows();
  }
  stateList = new FormControl();
 

 

  ngOnInit(): void {
  }
  comparer(o1: any, o2: any): boolean {
    // if possible compare by object's name, and not by reference.
    return o1 && o2 ? o1.label === o2.label : o2 === o2;
  }
}
