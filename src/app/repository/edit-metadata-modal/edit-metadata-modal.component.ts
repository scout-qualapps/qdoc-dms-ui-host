import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-edit-metadata-modal',
  templateUrl: './edit-metadata-modal.component.html',
  styleUrls: ['./edit-metadata-modal.component.scss']
})
export class EditMetadataModalComponent implements OnInit {
  selected = new FormControl('Private');
  selected2 = new FormControl('SrikantaPrakash');
  constructor() { }

  ngOnInit(): void {
  }

}
