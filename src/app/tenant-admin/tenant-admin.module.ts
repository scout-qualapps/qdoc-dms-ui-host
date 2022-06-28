import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TenantAdminRoutingModule } from './tenant-admin.routing';
import { ManageRepositoryComponent } from './manage-repository/manage-repository.component';
import { AddNewRepositoryComponent } from './add-new-repository/add-new-repository.component';
import { RepositoryDetailsComponent } from './repository-details/repository-details.component';
import { PropertiesComponent } from './repository-details/properties/properties.component';
import { MetadataTemplateComponent } from './repository-details/metadata-template/metadata-template.component';
import { TagsComponent } from './repository-details/tags/tags.component';
import { CommentsComponent } from './repository-details/comments/comments.component';
import { UserAccessComponent } from './repository-details/user-access/user-access.component';
import { AddMetadataTemplateComponent } from './add-metadata-template/add-metadata-template.component';
import { MetadataTemplateDetailsComponent } from './metadata-template-details/metadata-template-details.component';
import { FieldsComponent } from './metadata-template-details/fields/fields.component';
import { TemplatePropertiesComponent } from './metadata-template-details/template-properties/template-properties.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { SettingsComponent } from './settings/settings.component';
import { MetadataTemplatesListComponent } from './metadata-templates/metadata-templates-list/metadata-templates-list.component';
import { NewMetadataTemplateComponent } from './metadata-templates/new-metadata-template/new-metadata-template.component';
import { MetadataTemplatesDetailsComponent } from './metadata-templates/metadata-templates-details/metadata-templates-details.component';
import { MetadataTemplatePropertiesComponent } from './metadata-templates/metadata-templates-details/metadata-template-properties/metadata-template-properties.component';
import { MetadataTemplateFieldsComponent } from './metadata-templates/metadata-templates-details/metadata-template-fields/metadata-template-fields.component';
import { EditTemplatePropertiesComponent } from './metadata-templates/metadata-templates-details/metadata-template-properties/edit-template-properties/edit-template-properties.component';
import { AddTemplateFieldsComponent } from './metadata-templates/metadata-templates-details/metadata-template-fields/add-template-fields/add-template-fields.component';
import { EditTemplateFieldsComponent } from './metadata-templates/metadata-templates-details/metadata-template-fields/edit-template-fields/edit-template-fields.component';
import { EditCompanyDetailsComponent } from './company-info/edit-company-details/edit-company-details.component';
import { EditCompanyContactDetailsComponent } from './company-info/edit-company-contact-details/edit-company-contact-details.component';
import { UserAccessDetailsComponent } from './user-access-details/user-access-details.component';
import { RepositoryUsersTableComponent } from './user-access-details/repository-users-table/repository-users-table.component';
import { RolesPrivilegesComponent } from './roles-privileges/roles-privileges.component';
import { OtherUsersTableComponent } from './user-access-details/other-users-table/other-users-table.component';
import { CreateNewRoleComponent } from './roles-privileges/create-new-role/create-new-role.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UserActivityComponent } from './users/user-activity/user-activity.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { ViewUserModalComponent } from './user-access-details/view-user-modal/view-user-modal.component';
import { EditUserDetailsModalComponent } from './users/user-details/edit-user-details-modal/edit-user-details-modal.component';
import { RolesPrivilegesDetailsComponent } from './roles-privileges/roles-privileges-details/roles-privileges-details.component';
import { EditRolesPrivilegesModalComponent } from './roles-privileges/edit-roles-privileges-modal/edit-roles-privileges-modal.component';
import { EditPrivilegesModalComponent } from './roles-privileges/edit-privileges-modal/edit-privileges-modal.component';
import { UserListViewComponent } from './users/user-list-view/user-list-view.component';
import { RolesPrivilegesListViewComponent } from './roles-privileges/roles-privileges-list-view/roles-privileges-list-view.component';
import { RepositoryListViewComponent } from './manage-repository/repository-list-view/repository-list-view.component';
import { TemplatesListViewComponent } from './metadata-templates/metadata-templates-list/templates-list-view/templates-list-view.component';
import { UserAccessModalComponent } from './user-access-details/user-access-modal/user-access-modal.component';


@NgModule({
  declarations: [
    ManageRepositoryComponent,
    AddNewRepositoryComponent,
    RepositoryDetailsComponent,
    PropertiesComponent,
    MetadataTemplateComponent,
    TagsComponent,
    CommentsComponent,
    UserAccessComponent,
    AddMetadataTemplateComponent,
    MetadataTemplateDetailsComponent,
    FieldsComponent,
    TemplatePropertiesComponent,
    CompanyInfoComponent,
    SettingsComponent,
    MetadataTemplatesListComponent,
    NewMetadataTemplateComponent,
    MetadataTemplatesDetailsComponent,
    MetadataTemplatePropertiesComponent,
    MetadataTemplateFieldsComponent,
    EditTemplatePropertiesComponent,
    AddTemplateFieldsComponent,
    EditTemplateFieldsComponent,
    EditCompanyDetailsComponent,
    EditCompanyContactDetailsComponent,
    UserAccessDetailsComponent,
    RepositoryUsersTableComponent,
    RolesPrivilegesComponent,
    OtherUsersTableComponent,
    CreateNewRoleComponent,
    UsersComponent,
    AddUserComponent,
    UserActivityComponent,
    UserDetailsComponent,
    ViewUserModalComponent,
    EditUserDetailsModalComponent,
    RolesPrivilegesDetailsComponent,
    EditRolesPrivilegesModalComponent,
    EditPrivilegesModalComponent,
    UserListViewComponent,
    RolesPrivilegesListViewComponent,
    RepositoryListViewComponent,
    TemplatesListViewComponent,
    UserAccessModalComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    TenantAdminRoutingModule,
 
  ]
})
export class TenantAdminModule { }
