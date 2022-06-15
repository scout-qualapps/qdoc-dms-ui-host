import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metadata-template-details',
  templateUrl: './metadata-template-details.component.html',
  styleUrls: ['./metadata-template-details.component.scss']
})
export class MetadataTemplateDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
