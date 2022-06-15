import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-state-ui',
  templateUrl: './empty-state-ui.component.html',
  styleUrls: ['./empty-state-ui.component.scss']
})
export class EmptyStateUiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
