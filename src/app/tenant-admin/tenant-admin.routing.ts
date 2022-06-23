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
import { UserAccessDetailsComponent } from './user-access-details/user-access-details.component';
import { RolesPrivilegesComponent } from './roles-privileges/roles-privileges.component';
import { CreateNewRoleComponent } from './roles-privileges/create-new-role/create-new-role.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UserActivityComponent } from './users/user-activity/user-activity.component';


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
        path: 'user-access-details',
        component: UserAccessDetailsComponent
      },
      {
        path: 'user-roles-privileges',
        component: RolesPrivilegesComponent
      },
      {
        path: 'create-new-role',
        component: CreateNewRoleComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'add-user',
        component: AddUserComponent
      },
      {
        path: 'user-activity',
        component: UserActivityComponent
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
