import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ShareModalComponent } from 'src/app/shared/share-modal/share-modal.component';
@Component({
  selector: 'app-folder-vew-file-details',
  templateUrl: './folder-vew-file-details.component.html',
  styleUrls: ['./folder-vew-file-details.component.scss']
})
export class FolderVewFileDetailsComponent implements OnInit {
  isShowDiv = false;  
  mobileView = false;
  
  panelOpenState = false;
  constructor(public dialog: MatDialog) {}
  isFavorite: boolean = true;
  openShareDialog() {
    const dialogRef = this.dialog.open(ShareModalComponent, {panelClass: 'custon-width-md'});
    dialogRef.afterClosed().subscribe(result => {
    });
  }

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
