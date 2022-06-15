import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogContentExampleDialogComponent } from './dialog-content-example-dialog/dialog-content-example-dialog.component';

@Component({
  selector: 'app-modal-dialog-template',
  templateUrl: './modal-dialog-template.component.html',
  styleUrls: ['./modal-dialog-template.component.scss']
})

export class ModalDialogTemplateComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialogComponent,{panelClass: 'full-screen-dialog'});
  }

}
