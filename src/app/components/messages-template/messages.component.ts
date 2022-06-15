import { Component, OnInit,HostListener } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { ElementRef, ViewChild } from '@angular/core';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import { ToastrService } from 'ngx-toastr';
import {MatDialog} from '@angular/material/dialog';
import { ConformationDialogComponent } from './conformation-dialog/conformation-dialog.component';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { RepositoriesOrderModalComponent } from 'src/app/shared/repositories-order-modal/repositories-order-modal.component';

interface value {
  value: string;
  viewValue: string;
  className:string;
}
@Component({
  selector: 'app-messages-template',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  security = new FormControl();
  fileType = new FormControl();
 
  securityValue: value[] = [
    {value: 'visibility_off', className:'visibility-off', viewValue: 'Private'},
    {value: 'visibility', className:'visibility', viewValue: 'Public'},

  ];

  fileTypeValue: value[] = [
    {value: 'assets/images/icon-pdf.svg', className:'', viewValue: 'PDF'},
    {value: 'assets/images/icon-doc.svg', className:'',  viewValue: 'Doc'},
    {value: 'assets/images/icon-xls.svg', className:'',  viewValue: 'Excel'},
  ];

  sortvalue: value[] = [
    {value: 'Alphanumeric', viewValue: 'Alphanumeric',className:''},
    {value: 'Numeric', viewValue: 'Numeric', className:''},
    {value: 'Date', viewValue: 'Date', className:''},
    {value: 'Lookup', viewValue: 'Lookup', className:''},
    {value: 'Boolean', viewValue: 'Boolean', className:''},
  ];
  
  selectedValue = '0';

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

  separatorKeysCodes: number[] = [ENTER, COMMA];
  AdminUserCtrl = new FormControl();
  filteredAdminUser: Observable<string[]>;
  AdminUser: string[] = [];
  allAdminUser: string[] = ['Jone, Jose', 'Praksh, Kumar', 'Thomas, Jone ', 'Kumar, Ravan', 'Vishanth, John'];
  options: string[] = ['Jason, Doe', 'Prakash, Chandra', 'Srikanta, Prakash'];
  filteredOptions: Observable<string[]>;
  @ViewChild('AdminUserInput') AdminUserInput: ElementRef<HTMLInputElement>;

  constructor(private toastr: ToastrService, public dialog: MatDialog) {
   this.filteredAdminUser = this.AdminUserCtrl.valueChanges.pipe(
     startWith(null),
     map((AdminUserName: string | null) => (AdminUserName ? this._filter(AdminUserName) : this.allAdminUser.slice())),
   );
 }

 //constructor(public dialog: MatDialog) {}
 openRepositoriesOrderDialog() {
  const dialogRef = this.dialog.open(RepositoriesOrderModalComponent, {panelClass: 'drag-list-dialog'});
  dialogRef.afterClosed().subscribe(result => {
  });
}
showSuccess() {
this.toastr.success('An example success alert with an icon', 'Success!', {
  closeButton: true,
  positionClass: 'toast-top-center',
});
}
showError() {
  this.toastr.error('An example danger alert with an icon', 'Error!', {
    closeButton: true,
    positionClass: 'toast-top-center',
    disableTimeOut: false,
  });
  }
  showWarning() {
    this.toastr.warning('An example warning alert with an icon', 'Warning!', {
      closeButton: true,
      positionClass: 'toast-top-center',
      disableTimeOut: false,
    });
    }
  


 add(event: MatChipInputEvent): void {
  const value = (event.value || '').trim();

  // Add our AdminUserName
  if (value) {
    this.AdminUser.push(value);
  }

  // Clear the input value
  event.chipInput!.clear();

  this.AdminUserCtrl.setValue(null);
}

remove(AdminUserName: string): void {
  const index = this.AdminUser.indexOf(AdminUserName);

  if (index >= 0) {
    this.AdminUser.splice(index, 1);
  }
}

selected(event: MatAutocompleteSelectedEvent): void {
  this.AdminUser.push(event.option.viewValue);
  this.AdminUserInput.nativeElement.value = '';
  this.AdminUserCtrl.setValue(null);
}

private _filter(value: string): string[] {
  const filterValue = value.toLowerCase();

  return this.allAdminUser.filter(AdminUserName => AdminUserName.toLowerCase().includes(filterValue));
}

  getFileTypeName(fileSrc: string) {
    const file = this.fileTypeValue.find(f=> f.value === fileSrc);
    return file?.viewValue;
   }

   getSecurityTypeName(fileSrc: string) {
    const scc = this.securityValue.find(f=> f.value === fileSrc);
    return scc?.viewValue;
   }

   openConfirmationDialog() {
    const dialogRef = this.dialog.open(ConformationDialogComponent,{panelClass: 'xm-dialog'});
  }

  openAlertDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent,{panelClass: 'xm-dialog'});
  }
  
  error: string;
  dragAreaClass: string;
  draggedFiles: any;
  onFileChange(event: any) {
    let files: FileList = event.target.files;
    this.saveFiles(files);
  }
  
  ngOnInit() {
    this.dragAreaClass = "dragarea";
  }
  @HostListener("dragover", ["$event"]) onDragOver(event: any) {
    this.dragAreaClass = "droparea";
    event.preventDefault();
  }
  @HostListener("dragenter", ["$event"]) onDragEnter(event: any) {
    this.dragAreaClass = "droparea";
    event.preventDefault();
  }
  @HostListener("dragend", ["$event"]) onDragEnd(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }
  @HostListener("dragleave", ["$event"]) onDragLeave(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
  }
  @HostListener("drop", ["$event"]) onDrop(event: any) {
    this.dragAreaClass = "dragarea";
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files) {
      let files: FileList = event.dataTransfer.files;
      this.saveFiles(files);
    }
  }

  saveFiles(files: FileList) {

    if (files.length > 1) this.error = "Only one file at time allow";
    else {
      this.error = "";
      
      this.draggedFiles = files;
      
    }
  }
}
