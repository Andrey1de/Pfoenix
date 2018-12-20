import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/Items.service';
import { Item } from '../gallery/gallery.item';


@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent implements OnInit {
  galeryKeyword: string = '';
  get lastSearch() { return this.items.lastSearch; }
  get lastUrl() { return this.items.ItemDataUrl + this.items.lastKeyword; }
  get Items(): Item[] { return this.items.Items; }

  ngOnInit() {
   
    // this.galeryKeyword = 'qwerty';
    // this.queryItems();

  }


  constructor(private items: ItemsService) {
   this.galeryKeyword = items.lastKeyword;
    
  }


  queryItems() {

    this.items.query(this.galeryKeyword);
  }

}
