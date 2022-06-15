import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-edit-metadata-repository-modal',
  templateUrl: './edit-metadata-repository-modal.component.html',
  styleUrls: ['./edit-metadata-repository-modal.component.scss']
})
export class EditMetadataRepositoryModalComponent implements OnInit {
  selected = new FormControl('Private');
  selected2 = new FormControl('SrikantaPrakash');
  constructor() { }

  ngOnInit(): void {
  }

}

