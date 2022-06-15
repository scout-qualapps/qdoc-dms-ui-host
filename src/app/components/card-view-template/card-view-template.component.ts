import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MoveCopyModalComponent } from 'src/app/shared/move-copy-modal/move-copy-modal.component';
interface value {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-card-view-template',
  templateUrl: './card-view-template.component.html',
  styleUrls: ['./card-view-template.component.scss']
})
export class CardViewTemplateComponent implements OnInit {

  sortvalue: value[] = [
    {value: 'name', viewValue: 'Name'},
    {value: 'last-modified', viewValue: 'Last Modified'},
    {value: 'repository', viewValue: 'Repository'},
    {value: 'folder', viewValue: 'Folder'},
  ];

 

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
