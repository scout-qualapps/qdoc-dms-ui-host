import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search.routing';
import { SearchListViewComponent } from './search-list-view/search-list-view.component';
import { SearchCardViewComponent } from './search-card-view/search-card-view.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';


@NgModule({
  declarations: [
    SearchComponent,
    SearchListViewComponent,
    SearchCardViewComponent,
    AdvancedSearchComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SearchRoutingModule,
  ]
})
export class SearchModule { }
