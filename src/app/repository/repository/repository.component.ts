import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MoveCopyModalComponent } from 'src/app/shared/move-copy-modal/move-copy-modal.component';
import { ShareModalComponent } from 'src/app/shared/share-modal/share-modal.component';
import { ConfigureColumnsModalComponent } from 'src/app/shared/configure-columns-modal/configure-columns-modal.component';

import { RepositoriesOrderModalComponent } from 'src/app/shared/repositories-order-modal/repositories-order-modal.component';

interface value {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {

  isListView:boolean = true;

  sortvalue: value[] = [
    {value: 'name', viewValue: 'Name'},
    {value: 'last-modified', viewValue: 'Last Modified'},
  ];

  isFavorite: boolean = true;

  favorite() {
    this.isFavorite = this.isFavorite ? false : true;
  }

  navigateToNewFolder() {
  }
  constructor(public dialog: MatDialog) {}
  


  ngOnInit(): void {
    window.scroll(0, 0);
  }
  openConfigureColumnsDialog() {
    const dialogRef = this.dialog.open(ConfigureColumnsModalComponent, {panelClass: 'drag-list-dialog'});
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  openRepositoriesOrderDialog() {
    const dialogRef = this.dialog.open(RepositoriesOrderModalComponent, {panelClass: 'drag-list-dialog'});
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  openMoveCopyDialog() {
    const dialogRef = this.dialog.open(MoveCopyModalComponent, {panelClass: 'custon-width-md'});
    dialogRef.afterClosed().subscribe(result => {    
    });
  }
  openShareDialog() {
    const dialogRef = this.dialog.open(ShareModalComponent, {panelClass: 'custon-width-md'});
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
