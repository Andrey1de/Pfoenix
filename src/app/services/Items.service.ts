import { Injectable } from '@angular/core';
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
     lastKeyword: string ;
     lastUrl: string ;
     lastSearch: ItemsRootObject = null;

     get Items(): Item[] { return !!this.lastSearch ? this.lastSearch.items : [];}

     constructor(private http: HttpClient) {
     //  debugger;
        this.ItemDataUrl = 'https://api.github.com/search/repositories?q=';
     }


    public query(keyword : string) {
      
      let ret = this.http.get<ItemsRootObject>(this.ItemDataUrl + keyword)
        .subscribe((res) => {
            this.lastSearch = res;
            this.lastKeyword = keyword;
            this.lastUrl = this.ItemDataUrl + keyword;
          let qq = this.Items;
          
        
          }
        );
       
    }

}


