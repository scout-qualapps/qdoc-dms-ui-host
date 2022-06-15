import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  
  isHamburgerEnabled: boolean = false;
  isNavClosedClicked: boolean = false;
  isMouseEnteredClicked: boolean = false;
  
  menuSlide(): void {
    this.isHamburgerEnabled = !this.isHamburgerEnabled ? true : false;
  }
  
  navSlide() {
      this.isNavClosedClicked = !this.isNavClosedClicked ? true : false;
  }

  mouseSlide() {
    this.isMouseEnteredClicked = !this.isMouseEnteredClicked ? true : false;
  }

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }
}
