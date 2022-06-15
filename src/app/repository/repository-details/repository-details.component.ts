import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repository-details.component.html',
  styleUrls: ['./repository-details.component.scss']
})
export class RepoDetailsComponent implements OnInit {

  isShowDiv = false;  
  mobileView = false;
  
  panelOpenState = false;
  constructor() { }
  isFavorite: boolean = true;

  favorite() {
    this.isFavorite = this.isFavorite ? false : true;
  }

  ngOnInit() {
    window.onresize = () => this.mobileView = window.innerWidth <= 576;
    this.mobileView = true;
    window.scroll(0, 0);
    
  }
  toggleDisplayDiv() {  
    this.isShowDiv = !this.isShowDiv;  
  }

}
