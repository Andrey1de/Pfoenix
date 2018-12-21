import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item,License,Owner } from '../gallery/gallery.item';
interface HashTable < T > {
  [key: string]: T;
}
interface ItemsRootObject {
  total_count: number;
  incomplete_results: boolean;
  items: Item[];
 }
@Injectable({
  providedIn: 'root',
})
export class ItemsService {
     readonly ItemDataUrl: string;
     lastKeyword: string ;
     lastUrl: string ;
     lastSearch: ItemsRootObject = null;
     isReady : boolean = true;
    // @Output() changeItems: EventEmitter<Item[]> = new EventEmitter();
     hashBookmarks : HashTable<boolean> = {}
     get Items(): Item[] { return !!this.lastSearch ? this.lastSearch.items : [];}

     constructor(private http: HttpClient) {
     //  debugger;
        this.ItemDataUrl = 'https://api.github.com/search/repositories?q=';
        //this.changeItems.emit(this.Items);
        
      }
      //Set HashTable to store bookmark for next search
      setBookmark(item: Item, toBookmark: boolean){
        let idStr : string = ''+item.id;
        this.hashBookmarks[idStr] = toBookmark;
      }

      //Restore bookmarks by the hashtable
      private restoreBookmarks(){
        this.Items.forEach((item,num) => {
          let idStr: string = '' + item.id;
          item.bookmark = !!this.hashBookmarks[idStr];
          
        });
  
      }

      public query(keyword : string) {
      this.isReady = false;
      let ret = this.http.get<ItemsRootObject>(this.ItemDataUrl + keyword)
        .subscribe((res) => {
            this.lastSearch = res;
            this.lastKeyword = keyword;
            this.lastUrl = this.ItemDataUrl + keyword;
            //this.changeItems.emit(this.Items);
            this.isReady = false;
            this.restoreBookmarks();
          console.log('@@@ New search' +
              ' Num#=' + this.Items.length +
               ' keyword=' + keyword
              );
         
          }
        );
       
    }

}


