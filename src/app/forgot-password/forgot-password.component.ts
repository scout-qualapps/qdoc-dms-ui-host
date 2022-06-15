import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { TermsConditionsComponent } from '../shared/terms-conditions/terms-conditions.component';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  
  ngOnInit(): void {
  }

  TermsConditions() {
    const dialogRef = this.dialog.open(TermsConditionsComponent,{panelClass: 'full-screen'});
  }

}
