import { Component, OnInit } from '@angular/core';
import { ItemsService } from './services/Items.service';
import { Item } from './gallery/gallery.item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular7Gallery';
  //get Items(): Item[] { return this.items.Items; }
  // get Key(): string{
  //    debugger;
  //    return this.items.lastKeyword;
  //   }

  constructor(public items: ItemsService) {

  }

  ngOnInit() {
  }
}
