import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() hamburger = new EventEmitter();

  showHamburger: boolean = true;
  showSearchFilter: boolean = false;

  hamburgerMenu(): void {
    this.showHamburger = this.showHamburger ? false : true;
    this.hamburger.emit();
  }

  showSearch(): void {
    this.showSearchFilter = this.showSearchFilter ? false : true;
  }

  logout() {
    this.router.navigate(['/']);
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
