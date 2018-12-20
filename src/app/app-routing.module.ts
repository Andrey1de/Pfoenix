import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryDashboardComponent } from './gallery-dashboard/gallery-dashboard.component';

import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';

const routes: Routes = [
  { path: 'gallery', component: GalleryDashboardComponent },
  { path: 'fetch', component: FetchDataComponent },
  {
    path: '',
    redirectTo: '/gallery',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
