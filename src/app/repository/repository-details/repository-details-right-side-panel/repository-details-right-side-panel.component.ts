import { Component, OnInit ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-repo-details-right-side-panel',
  templateUrl: './repository-details-right-side-panel.component.html',
  styleUrls: ['./repository-details-right-side-panel.component.scss']
})
export class RepoDetailsRightSidePanelComponent implements OnInit {
  @Output() hamburger = new EventEmitter();
  panelOpenState = false;
  isTagClicked: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
