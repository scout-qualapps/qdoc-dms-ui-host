import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-repository',
  templateUrl: './manage-repository.component.html',
  styleUrls: ['./manage-repository.component.scss']
})
export class ManageRepositoryComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
