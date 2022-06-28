import { Component, OnInit,ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatExpansionPanel } from '@angular/material/expansion';
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

  @ViewChild('panel1') firstPanel: MatExpansionPanel;

  public forcedState = false;


  public toggleFirstPanel(){
    this.firstPanel.toggle();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
