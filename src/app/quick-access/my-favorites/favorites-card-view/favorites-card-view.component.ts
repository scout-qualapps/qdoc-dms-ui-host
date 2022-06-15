import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MoveCopyModalComponent } from 'src/app/shared/move-copy-modal/move-copy-modal.component';

@Component({
  selector: 'app-favorites-card-view',
  templateUrl: './favorites-card-view.component.html',
  styleUrls: ['./favorites-card-view.component.scss']
})
export class FavoritesCardViewComponent implements OnInit {
  isListView:boolean = true;
  constructor(public dialog: MatDialog) {}
  
  openMoveCopyDialog() {
    const dialogRef = this.dialog.open(MoveCopyModalComponent, {panelClass: 'custon-width-md'});
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}

