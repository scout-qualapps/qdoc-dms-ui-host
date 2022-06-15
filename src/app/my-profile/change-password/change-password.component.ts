import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  currentPasswordtype: string = 'password';
  newPasswordtype: string = 'password';
  confirmPasswordtype: string = 'password';

  showCurrentPassword() {
    this.currentPasswordtype=
    this.currentPasswordtype==='password'?'text':'password';
  }
  showNewPassword() {
    this.newPasswordtype=
    this.newPasswordtype==='password'?'text':'password';
  }
  showConfirmPassword() {
    this.confirmPasswordtype=
    this.confirmPasswordtype==='password'?'text':'password';
  }
  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
