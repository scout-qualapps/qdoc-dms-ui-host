import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { TermsConditionsComponent } from 'src/app/shared/terms-conditions/terms-conditions.component';
import { ContactComponent } from 'src/app/shared/contact/contact.component';
import { ReleaseNotesComponent } from '../release-notes/release-notes.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }
  TermsConditions() {
    const dialogRef = this.dialog.open(TermsConditionsComponent,{panelClass: 'full-screen'});
  }
  contact() {
    const dialogRef = this.dialog.open(ContactComponent,{panelClass: ['full-screen', 'contact-dialog']});
  }
  releaseNotes() {
    const dialogRef = this.dialog.open(ReleaseNotesComponent,{panelClass: 'full-screen'});
  }
}


