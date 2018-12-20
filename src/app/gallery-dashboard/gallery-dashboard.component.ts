import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ItemsService } from '../services/Items.service';
import { Item } from '../gallery/gallery.item';

@Component({
  selector: 'app-gallery-dashboard',
  templateUrl: './gallery-dashboard.component.html',
  styleUrls: ['./gallery-dashboard.component.css']
})
export class GalleryDashboardComponent {
 

  constructor(private breakpointObserver: BreakpointObserver,
    private itemSvc : ItemsService) {

  
  }

  setBookmark(item : Item , toBookmark : boolean)
  {
    item.bookmark = toBookmark;
    this.itemSvc.setBookmark(item , toBookmark );
  }

  
}
