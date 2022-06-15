import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryComponent } from './repository/repository.component';
import { RepositoryRoutingModule } from './repository.routing';
import { FileDetailsComponent } from './file-details/file-details.component';
import { SharedModule } from '../shared/shared.module';
import { DetailsTabComponent } from './file-details/details-tab/details-tab.component';
import { FilePreviewComponent } from './file-details/file-preview/file-preview.component';
import { CommentsComponent } from './file-details/comments/comments.component';
import { RightSidePanelComponent } from './file-details/right-side-panel/right-side-panel.component';
import { ListViewComponent } from './list-view/list-view.component';
import { CardViewComponent } from './card-view/card-view.component';
import { NewFolderComponent } from './new-folder/new-folder.component';
import { RelatedFilesComponent } from './file-details/details-tab/related-files/related-files.component';
import { SharingComponent } from './file-details/details-tab/sharing/sharing.component';
import { VersionHitoryComponent } from './file-details/details-tab/version-hitory/version-hitory.component';
import { UserAccessComponent } from './file-details/details-tab/user-access/user-access.component';
import { RepoDetailsComponent } from './repository-details/repository-details.component';
import { RepoDetailsCommentsComponent } from './repository-details/repository-details-comments/repository-details-comments.component';
import { RepoDetailsRightSidePanelComponent } from './repository-details/repository-details-right-side-panel/repository-details-right-side-panel.component';
import { RepoUserAccessComponent } from './repository-details/repository-user-access/repository-user-access.component';
import { FolderViewComponent } from './folder-view/folder-view.component';
import { FolderListViewComponent } from './folder-view/folder-list-view/folder-list-view.component';
import { FolderCardViewComponent } from './folder-view/folder-card-view/folder-card-view.component';
import { FolderDetailsComponent } from './folder-view/folder-details/folder-details.component';
import { FolderDetailsCommentsComponent } from './folder-view/folder-details/folder-details-comments/folder-details-comments.component';
import { FolderDetailsTabComponent } from './folder-view/folder-details/folder-details-tab/folder-details-tab.component';
import { FolderVersionHistoryComponent } from './folder-view/folder-details/folder-details-tab/folder-version-history/folder-version-history.component';
import { FolderSharingComponent } from './folder-view/folder-details/folder-details-tab/folder-sharing/folder-sharing.component';
import { FolderUserAccessComponent } from './folder-view/folder-details/folder-details-tab/folder-user-access/folder-user-access.component';
import { FolderDetailRightSidePanelComponent } from './folder-view/folder-details/folder-detail-right-side-panel/folder-detail-right-side-panel.component';
import { FolderVewFileDetailsComponent } from './folder-view/folder-vew-file-details/folder-vew-file-details.component';
import { EditMetadataModalComponent } from './edit-metadata-modal/edit-metadata-modal.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { FolderEditPropertiesModalComponent } from './folder-edit-properties-modal/folder-edit-properties-modal.component';
import { FileEditPropertiesModalComponent } from './file-edit-properties-modal/file-edit-properties-modal.component';
import { RelatedFilesModalComponent } from './file-details/details-tab/related-files/related-files-modal/related-files-modal.component';

@NgModule({
  declarations: [
    RepositoryComponent,
    FileDetailsComponent,
    DetailsTabComponent,
    FilePreviewComponent,
    CommentsComponent,
    RightSidePanelComponent,
    ListViewComponent,
    CardViewComponent,
    NewFolderComponent,
    RelatedFilesComponent,
    SharingComponent,
    VersionHitoryComponent,
    UserAccessComponent,
    RepoDetailsComponent,
    RepoDetailsCommentsComponent,
    RepoDetailsRightSidePanelComponent,
    RepoUserAccessComponent,
    FolderViewComponent,
    FolderListViewComponent,
    FolderCardViewComponent,
    FolderDetailsComponent,
    FolderDetailsCommentsComponent,
    FolderDetailsTabComponent,
    FolderVersionHistoryComponent,
    FolderSharingComponent,
    FolderUserAccessComponent,
    FolderDetailRightSidePanelComponent,
    FolderVewFileDetailsComponent,
    EditMetadataModalComponent,
    UploadFileComponent,
    FolderEditPropertiesModalComponent,
    FileEditPropertiesModalComponent,
    RelatedFilesModalComponent,
 

  ],
  imports: [
    CommonModule,
    RepositoryRoutingModule,
    SharedModule

  ]
})
export class RepositoryModule { }
