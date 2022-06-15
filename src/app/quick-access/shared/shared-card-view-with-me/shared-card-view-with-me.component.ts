import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MoveCopyModalComponent } from 'src/app/shared/move-copy-modal/move-copy-modal.component';

@Component({
  selector: 'app-shared-card-view-with-me',
  templateUrl: './shared-card-view-with-me.component.html',
  styleUrls: ['./shared-card-view-with-me.component.scss']
})
export class SharedCardViewWithMeComponent implements OnInit {

  isListView:boolean = true;
  constructor(public dialog: MatDialog) {}
  
  openMoveCopyDialog() {
    const dialogRef = this.dialog.open(MoveCopyModalComponent, {panelClass: 'custon-width-md'});
  }
 
  ngOnInit(): void {
  }

}
