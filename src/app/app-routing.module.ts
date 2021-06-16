import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  {
    path: 'how-it-works',
    component: HowItWorksComponent
  },

  {
    path: 'user-list',
    component:UserListComponent
  },

  {
    path: '',
    redirectTo: 'how-it-works',
    pathMatch: 'full',
  },

  {
    path:'**',
    component:HowItWorksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
