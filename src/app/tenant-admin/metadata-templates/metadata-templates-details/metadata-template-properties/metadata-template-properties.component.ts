import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditTemplatePropertiesComponent } from './edit-template-properties/edit-template-properties.component';


@Component({
  selector: 'app-metadata-template-properties',
  templateUrl: './metadata-template-properties.component.html',
  styleUrls: ['./metadata-template-properties.component.scss']
})
export class MetadataTemplatePropertiesComponent implements OnInit {

 constructor(public dialog: MatDialog) { }
  openEditTemplateProperties() {
    const dialogRef = this.dialog.open(EditTemplatePropertiesComponent, {panelClass: 'full-screen-dialog'});
  }

  ngOnInit(): void {
  }
}
