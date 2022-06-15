import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MyProfileRoutingModule } from './my-profile.routing';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditMyProfileComponent } from './edit-my-profile/edit-my-profile.component';

@NgModule({
  declarations: [
    ChangePasswordComponent,
    EditMyProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MyProfileRoutingModule
  ]
})
export class MyProfileModule { }
