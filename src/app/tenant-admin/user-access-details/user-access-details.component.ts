import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewUserModalComponent } from 'src/app/tenant-admin/user-access-details/view-user-modal/view-user-modal.component';
 import { UserAccessModalComponent } from '../user-access-details/user-access-modal/user-access-modal.component';

interface value {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-user-access-details',
  templateUrl: './user-access-details.component.html',
  styleUrls: ['./user-access-details.component.scss']
})

export class UserAccessDetailsComponent implements OnInit {
  isListView:boolean = true;
  isListView2:boolean = true;
  sortvalue: value[] = [
    {value: 'name', viewValue: 'Name'},
    {value: 'last-modified', viewValue: 'Last Modified'},
    {value: 'repository', viewValue: 'Repository'},
    {value: 'folder', viewValue: 'Folder'},
  ];
 
 selectedTab = 0;
  changeTab(tabIndex: number) {
    this.selectedTab = tabIndex;
  
  }
 

  constructor(public dialog: MatDialog) {
    

   }
  logClick() {
   // activeLink = Other Users
   
    };
  
    openUserAccessModalDialog() {
      const dialogRef = this.dialog.open(UserAccessModalComponent, {panelClass: 'full-screen-dialog'});
      dialogRef.afterClosed().subscribe(result => {
      });
    }
    
   
    ViewUserModalDialog() {
      const dialogRef = this.dialog.open(ViewUserModalComponent, {panelClass: 'full-screen-dialog'});
      dialogRef.afterClosed().subscribe(result => {
      });
    }
  ngOnInit(): void {
    window.scroll(0, 0);
  }
  
}
