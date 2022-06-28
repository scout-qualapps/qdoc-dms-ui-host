import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-metadata-templates-list',
  templateUrl: './metadata-templates-list.component.html',
  styleUrls: ['./metadata-templates-list.component.scss']
})
export class MetadataTemplatesListComponent implements OnInit {


  constructor() { }
  
  ngOnInit(): void {
    window.scroll(0, 0);
  }
  
}




