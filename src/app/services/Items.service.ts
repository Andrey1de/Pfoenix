import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item,License,Owner } from '../gallery/gallery.item';

interface ItemsRootObject {
  total_count: number;
  incomplete_results: boolean;
  items: Item[];
 }
@Injectable()
export class ItemsService {
     readonly ItemDataUrl: string;
     lastKeyword: string = 'qwerty';
     lastUrl: string ;
     lastSearch: ItemsRootObject = null;
     isReady : boolean = true;
     @Output() changeItems: EventEmitter<Item[]> = new EventEmitter();

     get Items(): Item[] { return !!this.lastSearch ? this.lastSearch.items : [];}

     constructor(private http: HttpClient) {
     //  debugger;
        this.ItemDataUrl = 'https://api.github.com/search/repositories?q=';
        this.changeItems.emit(this.Items);
      }


    public query(keyword : string) {
      this.isReady = false;
      let ret = this.http.get<ItemsRootObject>(this.ItemDataUrl + keyword)
        .subscribe((res) => {
            this.lastSearch = res;
            this.lastKeyword = keyword;
            this.lastUrl = this.ItemDataUrl + keyword;
            this.changeItems.emit(this.Items);
            this.isReady = false;
          console.log('@@@ New search' +
              ' Num#=' + this.Items.length +
               ' keyword=' + keyword
              );
         
          }
        );
       
    }

}


