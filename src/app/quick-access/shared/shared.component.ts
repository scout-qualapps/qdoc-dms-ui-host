import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MoveCopyModalComponent } from 'src/app/shared/move-copy-modal/move-copy-modal.component';
import { ShareModalComponent } from 'src/app/shared/share-modal/share-modal.component';
import { ConfigureColumnsModalComponent } from 'src/app/shared/configure-columns-modal/configure-columns-modal.component';

interface value {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {
  isListView:boolean = true;
  isListView2:boolean = true;
  sortvalue: value[] = [
    {value: 'name', viewValue: 'Name'},
    {value: 'last-modified', viewValue: 'Last Modified'},
    {value: 'repository', viewValue: 'Repository'},
    {value: 'folder', viewValue: 'Folder'},
  ];

  constructor(public dialog: MatDialog) {}
  
  openMoveCopyDialog() {
    const dialogRef = this.dialog.open(MoveCopyModalComponent, {panelClass: 'custon-width-md'});
  }
  openShareDialog() {
    const dialogRef = this.dialog.open(ShareModalComponent, {panelClass: 'custon-width-md'});
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  openConfigureColumnsDialog() {
    const dialogRef = this.dialog.open(ConfigureColumnsModalComponent, {panelClass: 'drag-list-dialog'});
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  ngOnInit(): void {
    window.scroll(0, 0);
  }
}
