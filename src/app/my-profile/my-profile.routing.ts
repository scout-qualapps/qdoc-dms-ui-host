import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from '../root/root.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditMyProfileComponent } from './edit-my-profile/edit-my-profile.component';
export const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
        {
          path: 'change-password',
          component: ChangePasswordComponent
        },
        {
          path: 'my-profile',
          component: EditMyProfileComponent
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProfileRoutingModule { }
