import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { EditCompanyContactDetailsComponent } from 'src/app/tenant-admin/company-info/edit-company-contact-details/edit-company-contact-details.component';
import { EditCompanyDetailsComponent } from './edit-company-details/edit-company-details.component';


@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openEditCompanyContactDetailsDialog() {
    const dialogRef = this.dialog.open(EditCompanyContactDetailsComponent,{panelClass: 'full-screen-dialog'});
  }
  openEditCompanyDetailsDialog() {
    const dialogRef = this.dialog.open(EditCompanyDetailsComponent,{panelClass: 'company-info-modal'});
  }

  ngOnInit(): void {
  }

}
