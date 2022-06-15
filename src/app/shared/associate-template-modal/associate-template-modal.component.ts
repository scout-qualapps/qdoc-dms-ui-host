import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-associate-template-modal',
  templateUrl: './associate-template-modal.component.html',
  styleUrls: ['./associate-template-modal.component.scss']
})
export class AssociateTemplateModalComponent implements OnInit {
  step = 0;
  selected = new FormControl('Private');
  selected2 = new FormControl('SrikantaPrakash');
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
