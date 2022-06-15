import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MoveCopyModalComponent } from 'src/app/shared/move-copy-modal/move-copy-modal.component';

import { ShareModalComponent } from 'src/app/shared/share-modal/share-modal.component';

@Component({
  selector: 'app-folder-details',
  templateUrl: './folder-details.component.html',
  styleUrls: ['./folder-details.component.scss']
})
export class FolderDetailsComponent implements OnInit {

  isShowDiv = false;  
  mobileView = false;
  
  panelOpenState = false;
  constructor(public dialog: MatDialog) {}

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
  isFavorite: boolean = true;

  favorite() {
    this.isFavorite = this.isFavorite ? false : true;
  }

  ngOnInit() {
    window.onresize = () => this.mobileView = window.innerWidth <= 576;
    this.mobileView = true;
    window.scroll(0, 0);
    
  }
  toggleDisplayDiv() {  
    this.isShowDiv = !this.isShowDiv;  
  }


}
