import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-metadata-template',
  templateUrl: './new-metadata-template.component.html',
  styleUrls: ['./new-metadata-template.component.scss']
})
export class NewMetadataTemplateComponent implements OnInit {

  Default = true;
  categoryCheckbox = true;

  constructor() { }

  ngOnInit(): void {
  }

}
