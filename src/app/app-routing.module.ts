import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'', 
    component: LoginComponent
  },
  {
    path:'login', 
    component: LoginComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'quick-access',
    loadChildren: () => import('./quick-access/quick-access.module').then(m => m.QuickAccessModule),
  },
  {
    path: 'repository',
    loadChildren: () => import('./repository/repository.module').then(m => m.RepositoryModule),
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then(m => m.SearchModule),
  },
  {
    path: 'components',
    loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule),
  },
  {
    path: 'repo-admin',
    loadChildren: () => import('./repo-admin/repo-admin.module').then(m => m.RepoAdminModule),
  },
  {
    path: 'tenant-repo-admin',
    loadChildren: () => import('./tenant-admin/tenant-admin.module').then(m => m.TenantAdminModule),
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./my-profile/my-profile.module').then(m => m.MyProfileModule),
  },
 
  {
    path:'page-not-found', 
    component: PageNotFoundComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

