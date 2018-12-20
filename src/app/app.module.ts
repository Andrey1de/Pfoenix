import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ItemsService } from './services/Items.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material-module';
import { CardFancyExampleComponent } from './card-fancy-example/card-fancy-example.component';
import { GalleryDashboardComponent } from './gallery-dashboard/gallery-dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
   declarations: [
      AppComponent,
      PageNotFoundComponent,
      HomeComponent,
      GalleryComponent,
      FetchDataComponent,
      CardFancyExampleComponent,
      GalleryDashboardComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MaterialModule,
      MatGridListModule,
      MatCardModule,
      MatMenuModule,
      MatIconModule,
      MatButtonModule,
      LayoutModule
   ],
   providers: [
      ItemsService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
