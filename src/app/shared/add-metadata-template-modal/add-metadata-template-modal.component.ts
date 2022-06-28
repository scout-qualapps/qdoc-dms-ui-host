import { Component, OnInit,ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatExpansionPanel } from '@angular/material/expansion';
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

  @ViewChild('panel1') firstPanel: MatExpansionPanel;

  public forcedState = false;


  public toggleFirstPanel(){
    this.firstPanel.toggle();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
