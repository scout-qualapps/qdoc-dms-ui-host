import { Component, EventEmitter,  Output,  ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

import { Configuration, ExpandedLTR, SlideInOut } from 'ng-material-multilevel-menu';
import { MatDialog } from '@angular/material/dialog';
import { RepositoriesOrderModalComponent } from 'src/app/shared/repositories-order-modal/repositories-order-modal.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [SlideInOut, ExpandedLTR]
})

export class NavigationComponent {
  @Output() menutoggle = new EventEmitter();
  @Output() mousetoggle = new EventEmitter();

  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  
  isMenuClosed = false;
  isExpanded = true;
  isShowing = false;
  showSubmenu: boolean = false;  
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (this.isMenuClosed) {
      this.isShowing = true;
      this.mousetoggle.emit();
    }
  }

  mouseleave() {
    if (this.isMenuClosed) {
      this.isShowing = false;
      this.mousetoggle.emit();
    }
  }

  closeNavmenu() {
    this.isMenuClosed = this.isMenuClosed ? false : true;
    this.menutoggle.emit();
  }

  name = 'Angular';
  appitems = [
    {
      label: 'Quick Access',
      faIcon: 'icon-quick-access',
      class: 'level-1',
      items: [
        {
          label: 'Dashboard',
          link: '/quick-access/dashboard',
          faIcon: 'icon-dashboard'
       },
       {
          label: 'Recent',
          link: '/quick-access/recent',
          faIcon: 'icon-recent',
          badge: '11',
        },
        {
          label: 'My Favorites',
          link: '/quick-access/my-favorites',
          faIcon: 'icon-my-favourites',
          badge: '13',
        }, 
        {
          label: 'Shared',
          link: '/quick-access/shared',
          faIcon: 'icon-shared'
        },
        {
          label: 'Trash',
          link: '/quick-access/trash',
          faIcon: 'icon-trash',
          badge: '3',
        }
      ]
     },
     /***Important
      * For dev reference
      * Please do not remove below items which is used for Configure Display Order of Repositories
      * This will show a settings icon on next to Repositories main navigation
      * This should be always placed on above the Repositories menu
      * ***/
     {
      label: '',
      class: 'level-1 configure-order-repositories-icon',
      faIcon: '',
      disabled: true,
      repoMainIcon: 'settings',
      repoMainclass: 'repo-setting-icon',
     },
    {
      label: 'Repositories',
      class: 'level-1',
      faIcon: 'icon-repository',
      items: [
        {
          label: 'Repository 1',
          link: '/repository',
          faIcon: 'icon-repository',
          repoIcon: 'visibility_off',
          repoclass: 'visibility-off',
        },
        {
          label: 'Repository 2',
          link: '/repository2',
          faIcon: 'icon-repository',
          repoIcon: 'visibility',
        },
        {
          label: 'Repository 3',
          link: '/repository3',
          faIcon: 'icon-repository',
          repoIcon: 'visibility',
        },
      ]
    },  
    {
      label: 'Manage Repositories',
      class: 'level-1',
      faIcon: 'icon-manage-repository',
      items: [
        {
          label: 'Repositories',
          link: '/repo-admin',
          faIcon: 'icon-manage-repository'
        },
      ]
    },
    {
      label: 'Administration',
      class: 'level-1',
      faIcon: 'icon-manage-repository',
      items: [
        {
          label: 'Repositories',
          link: '/tenant-repo-admin',
          faIcon: 'icon-manage-repository'
        },
        {
          label: 'Metadata Templates',
          link: '/tenant-repo-admin/metadata-templates',
          faIcon: 'icon-metadata-templates'
        },
        {
          label: 'Users',
          faIcon: 'icon-group '
        },
        {
          label: 'Roles & Privileges',
          faIcon: 'icon-role '
        },
        {
          label: 'Company Info',
          link: '/tenant-repo-admin/company-info',
          faIcon: 'icon-info '
        },
        {
          label: 'Reports',
          faIcon: 'icon-reports'
        },
        {
          label: 'Lookups',
          faIcon: 'icon-lookups '
        },
        {
          label: 'Settings',
          link: '/tenant-repo-admin/settings',
          faIcon: 'icon-settings '
        },
      ]
    },
    /***Below items should  be removed */
    {
      label: 'Components (Dev Reference)',
      class: 'level-1',
      faIcon: 'icon-template',
      tooltip: 'Components (Dev Reference)',
      items: [
        {
          label: 'Messages ',
          link: '/components/messages',
          faIcon: 'icon-template'
        },
        {
          label: 'List View',
          link: '/components/list-view',
          faIcon: 'icon-template'
        },
        {
          label: 'Card View',
          link: '/components/card-view',
          faIcon: 'icon-template'
        },
        {
          label: 'Form Entry',
          link: '/components/form-entry',
          faIcon: 'icon-template'
        },
        {
          label: 'Breadcrumb',
          link: '/components/breadcrumb',
          faIcon: 'icon-template'
        },
        {
          label: 'Page Title',
          link: '/components/page-title',
          faIcon: 'icon-template'
        },
        {
          label: 'Empty Message',
          link: '/components/empty-message',
          faIcon: 'icon-template'
        },
        {
          label: 'Modal Dialogs',
          link: '/components/modal-dialogs',
          faIcon: 'icon-template'
        },
       
       
      ]
    },
    /***above will be removed */
    {
      label: '',
      faIcon: '',
      class: 'left-nav-devider',
    },
    {
      label: 'Notifications',
      faIcon: 'icon-notification',
      class: 'level-1 responsive-menu',
    },
    {
      label: 'Help',
      faIcon: 'icon-help',
      class: 'level-1 responsive-menu',
    },
    {
      label: '',
      faIcon: '',
      class: 'left-nav-devider',
    },
    {
      label: 'SP',
      // faIcon: 'icon-person' show a icon when user doesn't upload an photo,
      faIcon: 'icon-profile-photo',
      class: 'level-1 responsive-menu',
      items: [
        {
          label: 'Edit Profile',
          link: '../my-profile/my-profile',
          faIcon: 'icon-edit',
          class: 'responsive-menu',
       },
       {
        label: 'Change Password',
        link: '../my-profile/change-password',
        faIcon: 'icon-change-password',
        class: 'responsive-menu',
       },
        {
          label: 'Sign Out',
          link: '/login',
          faIcon: 'icon-logout',
          class: 'responsive-menu',
       },
      ]
    },  
  ];

  config: Configuration = {
    paddingAtStart: false,
    interfaceWithRoute: true,
    classname: 'app-sidemenu',
    useDividers: false,
    highlightOnSelect: true,
    collapseOnSelect: false,
    rtlLayout: false,
    customTemplate: true
  };
  getClass(item: any) {
      return {
          [item.faIcon]: true
      }
  }
  constructor(private router: Router,public dialog: MatDialog) {}
  openRepositoriesOrderDialog() {
    const dialogRef = this.dialog.open(RepositoriesOrderModalComponent, {panelClass: 'drag-list-dialog'});
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  ngOnInit() { 
    const url = this.router.url;
    if(url === '/') {
      
    }
  }
}