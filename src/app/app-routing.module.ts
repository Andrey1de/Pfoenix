import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryDashboardComponent } from './gallery-dashboard/gallery-dashboard.component';

import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GalleryDashboardComponent },
  { path: 'fetch', component: FetchDataComponent },
  {
    path: '',
    redirectTo: '/fetch',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
