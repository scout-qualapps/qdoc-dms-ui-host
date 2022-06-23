import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from '../root/root.component';
import { ManageRepositoryComponent } from './manage-repository/manage-repository.component';
import { AddNewRepositoryComponent } from './add-new-repository/add-new-repository.component';
import { RepositoryDetailsComponent } from './repository-details/repository-details.component';
import { AddMetadataTemplateComponent } from './add-metadata-template/add-metadata-template.component';
import { MetadataTemplateDetailsComponent } from './metadata-template-details/metadata-template-details.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { SettingsComponent } from './settings/settings.component';
import { MetadataTemplatesListComponent } from './metadata-templates/metadata-templates-list/metadata-templates-list.component';
import { NewMetadataTemplateComponent } from './metadata-templates/new-metadata-template/new-metadata-template.component';
import { MetadataTemplatesDetailsComponent } from './metadata-templates/metadata-templates-details/metadata-templates-details.component';


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
        path: 'new-repository',
       component: AddNewRepositoryComponent
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
        path: 'metadata-templates',
        component: MetadataTemplatesListComponent
      },
      {
        path: 'new-metadata-templates',
        component: NewMetadataTemplateComponent
      },
      {
        path: 'metadata-templates-details',
        component: MetadataTemplatesDetailsComponent
      },
      {
        path: 'company-info',
        component: CompanyInfoComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
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
export class TenantAdminRoutingModule { }
