import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { QuickAccessRoutingModule } from './quick-access.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedDocumentsComponent } from './dashboard/shared-documents/shared-documents.component';
import { DelegatedRolesComponent } from './dashboard/delegated-roles/delegated-roles.component';
import { NewRepositoriesComponent } from './dashboard/new-repositories/new-repositories.component';
import { UserRepositoryComponent } from './user-repository/user-repository.component';
import { ListViewComponent } from './user-repository/list-view/list-view.component';
import { CardViewComponent } from './user-repository/card-view/card-view.component';
import { RecentComponent } from './recent/recent.component';
import { RecentListViewComponent } from './recent/recent-list-view/recent-list-view.component';
import { RecentCardViewComponent } from './recent/recent-card-view/recent-card-view.component';
import { FavoritesListViewComponent } from './my-favorites/favorites-list-view/favorites-list-view.component';
import { FavoritesCardViewComponent } from './my-favorites/favorites-card-view/favorites-card-view.component';
import { MyFavoritesComponent } from './my-favorites/my-favorites/my-favorites.component';
import { SharedComponent } from './shared/shared.component';
import { SharedListViewComponent } from './shared/shared-list-view/shared-list-view.component';
import { SharedCardViewComponent } from './shared/shared-card-view/shared-card-view.component';
import { SharedListViewWithMeComponent } from './shared/shared-list-view-with-me/shared-list-view-with-me.component';
import { SharedCardViewWithMeComponent } from './shared/shared-card-view-with-me/shared-card-view-with-me.component';
import { TrashComponent } from './trash/trash.component';
import { TrashListViewComponent } from './trash/trash-list-view/trash-list-view.component';
import { TrashCardViewComponent } from './trash/trash-card-view/trash-card-view.component';

@NgModule({
  declarations: [
  
    DashboardComponent,
       SharedDocumentsComponent,
       DelegatedRolesComponent,
       NewRepositoriesComponent,
       UserRepositoryComponent,
       ListViewComponent,
       CardViewComponent,
       RecentComponent,
       RecentListViewComponent,
       RecentCardViewComponent,
       FavoritesListViewComponent,
       FavoritesCardViewComponent,
       MyFavoritesComponent,
       SharedComponent,
       SharedListViewComponent,
       SharedCardViewComponent,
       SharedListViewWithMeComponent,
       SharedCardViewWithMeComponent,
       TrashComponent,
       TrashListViewComponent,
       TrashCardViewComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    QuickAccessRoutingModule
  ]
})
export class QuickAccessModule { }
