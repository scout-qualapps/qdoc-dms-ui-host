import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-repo-details-comments',
  templateUrl: './repository-details-comments.component.html',
  styleUrls: ['./repository-details-comments.component.scss']
})
export class RepoDetailsCommentsComponent implements OnInit {

  isEditClicked: boolean = false;

  constructor() {}

  ngOnInit(): void {
  }

}
