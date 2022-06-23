import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-metadata-template-modal',
  templateUrl: './add-metadata-template-modal.component.html',
  styleUrls: ['./add-metadata-template-modal.component.scss']
})
export class AddMetadataTemplateModalComponent implements OnInit {
  step = 0;
  selected = new FormControl('Private');
  selected2 = new FormControl('SrikantaPrakash');
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
