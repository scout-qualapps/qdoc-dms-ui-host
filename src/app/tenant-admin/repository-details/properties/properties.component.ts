import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { EditRepositoryPropertiesModalComponent } from 'src/app/shared/edit-repository-properties-modal/edit-repository-properties-modal.component';


@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {


  constructor(public dialog: MatDialog) { }
  openEditRepositoryPropertiesModal() {
    const dialogRef = this.dialog.open(EditRepositoryPropertiesModalComponent,{panelClass: 'full-screen-dialog'});
  }
  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
