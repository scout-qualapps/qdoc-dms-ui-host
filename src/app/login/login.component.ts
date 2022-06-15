import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { TermsConditionsComponent } from '../shared/terms-conditions/terms-conditions.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  passwordtype: string = 'password';
  constructor(public dialog: MatDialog) {}

  showPassword() {
    this.passwordtype=
    this.passwordtype==='password'?'text':'password';
  }

  ngOnInit(): void {
  }
  TermsConditions() {
    const dialogRef = this.dialog.open(TermsConditionsComponent,{panelClass: 'full-screen'});
  }

}
