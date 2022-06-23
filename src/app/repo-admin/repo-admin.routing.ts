import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from '../root/root.component';
import { RepositoryDetailsComponent } from './repository-details/repository-details.component';
import { AddMetadataTemplateComponent } from './add-metadata-template/add-metadata-template.component';
import { ManageRepositoryComponent } from './manage-repository/manage-repository.component';
import { MetadataTemplateDetailsComponent } from './metadata-template-details/metadata-template-details.component';

export const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: 'repository-details',
        component: RepositoryDetailsComponent
      },
      {
        path: 'new-metadata-template',
        component: AddMetadataTemplateComponent
      },
      {
        path: 'metadata-template-details',
        component: MetadataTemplateDetailsComponent
      },
      
      {
        path: '',
        component: ManageRepositoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepoAdminRoutingModule { }
