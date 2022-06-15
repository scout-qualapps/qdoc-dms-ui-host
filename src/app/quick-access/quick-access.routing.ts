import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from '../root/root.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserRepositoryComponent } from './user-repository/user-repository.component';
import { RecentComponent } from './recent/recent.component';
import { MyFavoritesComponent } from './my-favorites/my-favorites/my-favorites.component';
import { SharedComponent } from './shared/shared.component';
import { TrashComponent } from './trash/trash.component';
export const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
        {
          path: 'dashboard',
          component: DashboardComponent
        },
        {
          path: 'recent',
          component: RecentComponent
        },
        {
          path: 'user-repository',
          component: UserRepositoryComponent
        },
        {
          path: 'my-favorites',
          component: MyFavoritesComponent
        },
        {
          path: 'shared',
          component: SharedComponent
        },
        {
          path: 'trash',
          component: TrashComponent
        }
      
        
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuickAccessRoutingModule { }
