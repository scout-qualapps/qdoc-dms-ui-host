
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule} from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { NgMaterialMultilevelMenuModule, MultilevelMenuService } from 'ng-material-multilevel-menu';
import { MatSortModule} from '@angular/material/sort';
import { MatPaginatorModule} from '@angular/material/paginator';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatTreeModule } from '@angular/material/tree';
import { MoveCopyModalComponent } from './move-copy-modal/move-copy-modal.component';
import { AddMetadataTemplateModalComponent } from './add-metadata-template-modal/add-metadata-template-modal.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EditMetadataTemplateModalComponent } from './edit-metadata-template-modal/edit-metadata-template-modal.component';
import { NewMetadataFieldModalComponent } from './new-metadata-field-modal/new-metadata-field-modal.component';
import { EditRepositoryPropertiesModalComponent } from './edit-repository-properties-modal/edit-repository-properties-modal.component';
import {MatChipsModule} from '@angular/material/chips';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { ContactComponent } from './contact/contact.component';
import {MatRadioModule} from '@angular/material/radio';
import { ShareModalComponent } from './share-modal/share-modal.component';
import { AssociateTemplateModalComponent } from './associate-template-modal/associate-template-modal.component';
import { ConfigureColumnsModalComponent } from './configure-columns-modal/configure-columns-modal.component';
import { RepositoriesOrderModalComponent } from './repositories-order-modal/repositories-order-modal.component';
import { UserAccessModalComponent } from './user-access-modal/user-access-modal.component';
import { ReleaseNotesComponent } from './release-notes/release-notes.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    LoadingSpinnerComponent,
    MoveCopyModalComponent,
    AddMetadataTemplateModalComponent,
    EditMetadataTemplateModalComponent,
    NewMetadataFieldModalComponent,
    EditRepositoryPropertiesModalComponent,
    TermsConditionsComponent,
    ContactComponent,
    ShareModalComponent,
    AssociateTemplateModalComponent,
    ConfigureColumnsModalComponent,
    RepositoriesOrderModalComponent,
    UserAccessModalComponent,
    ReleaseNotesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatExpansionModule,
    MatSidenavModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    RouterModule,
    NgMaterialMultilevelMenuModule,
    MatTooltipModule,
    MatInputModule,
    MatCheckboxModule,
    MatSortModule,
    MatPaginatorModule,
    DragDropModule,
    MatAutocompleteModule,
    MatTreeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatRadioModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    NavigationComponent,
    LoadingSpinnerComponent,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatToolbarModule,
    MatSelectModule,
    MatMenuModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    MatSidenavModule,
    NgMaterialMultilevelMenuModule,
   MatTooltipModule,
    MatInputModule,
    MatCheckboxModule,
    MatSortModule,
    MatPaginatorModule,
    DragDropModule,
    MatAutocompleteModule,
    MatTreeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatRadioModule
  ],
  providers: [
   MultilevelMenuService
  ]
})
export class SharedModule { }
