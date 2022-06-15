import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-metadata-template',
  templateUrl: './add-metadata-template.component.html',
  styleUrls: ['./add-metadata-template.component.scss']
})
export class AddMetadataTemplateComponent implements OnInit {
  Default = false;
  Default2 = false;

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
