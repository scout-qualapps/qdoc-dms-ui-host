import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-loading-spinner *ngIf="loading"></app-loading-spinner>
  <router-outlet></router-outlet>
`
})
export class AppComponent implements OnInit, OnDestroy {

  public loading = false;
  title = 'Quallaps UI';

  ngOnInit() {
    window.scroll(0, 0);
  }

  checkAndSetActiveAccount() {
    
  }

  ngOnDestroy() {
    
  }
}
