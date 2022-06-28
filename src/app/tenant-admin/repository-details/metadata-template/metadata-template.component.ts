import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatExpansionPanel } from '@angular/material/expansion';
import { EditMetadataTemplateModalComponent } from 'src/app/shared/edit-metadata-template-modal/edit-metadata-template-modal.component';
import { AssociateTemplateModalComponent } from 'src/app/shared/associate-template-modal/associate-template-modal.component';
import { EditMetadataRepositoryModalComponent } from 'src/app/shared/edit-metadata-repository-modal/edit-metadata-repository-modal.component';

@Component({
  selector: 'app-metadata-template',
  templateUrl: './metadata-template.component.html',
  styleUrls: ['./metadata-template.component.scss']
})
export class MetadataTemplateComponent implements OnInit {
  step = 0;
  defaultCheck = false;

  panelOpenState = false;
  constructor(public dialog: MatDialog) {}

  @ViewChild('panel1') firstPanel: MatExpansionPanel;

  public forcedState = false;

  public toggleFirstPanel(){
    this.firstPanel.toggle();
  }

  ngOnInit(): void {
  }
  openEditMetadataTemplate() {
    const dialogRef = this.dialog.open(EditMetadataTemplateModalComponent,{panelClass: 'full-screen-dialog'});

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  openAssociateTemplateDialog() {
    const dialogRef = this.dialog.open(AssociateTemplateModalComponent,{panelClass: 'full-screen-dialog'});
  }
  editMetadataRepositoryDialog() {
    const dialogRef = this.dialog.open(EditMetadataRepositoryModalComponent,{panelClass: 'full-screen-dialog'});
  }

}
