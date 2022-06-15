import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MoveCopyModalComponent } from 'src/app/shared/move-copy-modal/move-copy-modal.component';

import { ShareModalComponent } from 'src/app/shared/share-modal/share-modal.component';
@Component({
  selector: 'app-folder-card-view',
  templateUrl: './folder-card-view.component.html',
  styleUrls: ['./folder-card-view.component.scss']
})
export class FolderCardViewComponent implements OnInit {

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
  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
