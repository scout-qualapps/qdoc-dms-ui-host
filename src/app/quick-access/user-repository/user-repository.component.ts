import { Component, OnInit } from '@angular/core';
interface value {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-user-repository',
  templateUrl: './user-repository.component.html',
  styleUrls: ['./user-repository.component.scss']
})
export class UserRepositoryComponent implements OnInit {
  isListView:boolean = true;

  sortvalue: value[] = [
    {value: 'name', viewValue: 'Name'},
    {value: 'last-modified', viewValue: 'Last Modified'},
  ];

  isFavorite: boolean = true;

  favorite() {
    this.isFavorite = this.isFavorite ? false : true;
  }

  navigateToNewFolder() {
  }
  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
