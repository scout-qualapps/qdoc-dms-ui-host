import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from '../root/root.component';
import { EmptyStateUiComponent } from './empty-state-ui/empty-state-ui.component';
import { ModalDialogTemplateComponent } from './modal-dialog-template/modal-dialog-template.component';
import { NewFolderComponent } from './new-folder/new-folder.component';
import { ListViewTemplateComponent } from './list-view-template/list-view-template.component';
import { CardViewTemplateComponent } from './card-view-template/card-view-template.component';
import { BreadcrumbTemplateComponent } from './breadcrumb-template/breadcrumb-template.component';
import { PageTitleTemplateComponent } from './page-title-template/page-title-template.component';
import { MessagesComponent } from './messages-template/messages.component';
export const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
        {
          path: 'empty-message',
          component: EmptyStateUiComponent
        },
        {
          path: 'form-entry',
          component: NewFolderComponent
        },
        {
          path: 'modal-dialogs',
          component: ModalDialogTemplateComponent
        },
        {
          path: 'list-view',
          component: ListViewTemplateComponent
        },
        
        {
          path: 'card-view',
          component: CardViewTemplateComponent
        },
        {
          path: 'form-entry',
          component: NewFolderComponent
        },
        {
          path: 'breadcrumb',
          component: BreadcrumbTemplateComponent
        },
        {
          path: 'page-title',
          component: PageTitleTemplateComponent
        },
        {
          path: 'page-title',
          component: PageTitleTemplateComponent
        },
        {
          path: 'messages',
          component: MessagesComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
