import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MatDatepicker} from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { MoveCopyModalComponent } from 'src/app/shared/move-copy-modal/move-copy-modal.component';
import { ConfigureColumnsModalComponent } from 'src/app/shared/configure-columns-modal/configure-columns-modal.component';

interface value {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  isListView:boolean = true;

  sortvalue: value[] = [
    {value: 'name', viewValue: 'Name'},
    {value: 'last-modified', viewValue: 'Last Modified'},
    {value: 'repository', viewValue: 'Repository'},
    {value: 'folder', viewValue: 'Folder'},
  ];

 

  navigateToNewFolder() {
    
  }
  constructor(public dialog: MatDialog) {}
  openConfigureColumnsDialog() {
    const dialogRef = this.dialog.open(ConfigureColumnsModalComponent, {panelClass: 'drag-list-dialog'});
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  openMoveCopyDialog() {
    const dialogRef = this.dialog.open(MoveCopyModalComponent, {panelClass: 'custon-width-md'});
    

    dialogRef.afterClosed().subscribe(result => {
  
    });
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
