import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RepoAdminRoutingModule } from './repo-admin.routing';
import { RepositoryDetailsComponent } from './repository-details/repository-details.component';
import { CommentsComponent } from './repository-details/comments/comments.component';
import { UserAccessComponent } from './repository-details/user-access/user-access.component';
import { TagsComponent } from './repository-details/tags/tags.component';
import { PropertiesComponent } from './repository-details/properties/properties.component';
import { MetadataTemplateComponent } from './repository-details/metadata-template/metadata-template.component';
import { AddMetadataTemplateComponent } from './add-metadata-template/add-metadata-template.component';
import { ManageRepositoryComponent } from './manage-repository/manage-repository.component';
import { MetadataTemplateDetailsComponent } from './metadata-template-details/metadata-template-details.component';
import { TemplatePropertiesComponent } from './metadata-template-details/template-properties/template-properties.component';
import { FieldsComponent } from './metadata-template-details/fields/fields.component';
import { EditMetadataRepositoryModalComponent } from '../shared/edit-metadata-repository-modal/edit-metadata-repository-modal.component';



@NgModule({
  declarations: [
    RepositoryDetailsComponent,
    CommentsComponent,
    UserAccessComponent,
    TagsComponent,
    PropertiesComponent,
    MetadataTemplateComponent,
    AddMetadataTemplateComponent,
    ManageRepositoryComponent,
    MetadataTemplateDetailsComponent,
    TemplatePropertiesComponent,
    FieldsComponent,
    EditMetadataRepositoryModalComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RepoAdminRoutingModule,
  ]
})
export class RepoAdminModule { }
