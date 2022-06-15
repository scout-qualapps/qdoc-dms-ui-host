import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MoveCopyModalComponent } from 'src/app/shared/move-copy-modal/move-copy-modal.component';
@Component({
  selector: 'app-page-title-template',
  templateUrl: './page-title-template.component.html',
  styleUrls: ['./page-title-template.component.scss']
})
export class PageTitleTemplateComponent implements OnInit {

  isFavorite: boolean = true;

  favorite() {
    this.isFavorite = this.isFavorite ? false : true;
  }

  constructor(public dialog: MatDialog) {}


  openMoveCopyDialog() {
    const dialogRef = this.dialog.open(MoveCopyModalComponent, {panelClass: 'custon-width-md'});
    

    dialogRef.afterClosed().subscribe(result => {
    
    });
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
