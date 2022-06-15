import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { EditMetadataTemplateModalComponent } from 'src/app/shared/edit-metadata-template-modal/edit-metadata-template-modal.component';

@Component({
  selector: 'app-template-properties',
  templateUrl: './template-properties.component.html',
  styleUrls: ['./template-properties.component.scss']
})
export class TemplatePropertiesComponent implements OnInit {
  constructor(public dialog: MatDialog) { }
  openEditMetadataTemplate() {
    const dialogRef = this.dialog.open(EditMetadataTemplateModalComponent,{panelClass: 'full-screen-dialog'});
  }

  ngOnInit(): void {
  }

}
