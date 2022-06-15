import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from '../root/root.component';
import { SearchComponent } from '../search/search.component';
import { AdvancedSearchComponent } from '../search/advanced-search/advanced-search.component';
import { FileDetailsComponent } from 'src/app/repository/file-details/file-details.component';
import { FolderDetailsComponent } from 'src/app/repository/folder-view/folder-details/folder-details.component';
import { FolderViewComponent } from 'src/app/repository/folder-view/folder-view.component';

export const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: '',
        component: SearchComponent
      },
      {
        path: 'advanced-search',
        component: AdvancedSearchComponent
      },
      {
        path: 'file-details',
        component: FileDetailsComponent
      },
      {
        path: 'folder-view',
        component: FolderViewComponent
      },
      {
        path: 'folder-details',
        component: FolderDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
