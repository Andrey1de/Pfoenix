import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-gallery-dashboard',
  templateUrl: './gallery-dashboard.component.html',
  styleUrls: ['./gallery-dashboard.component.css']
})
export class GalleryDashboardComponent {
  avatar0: string = "url('https://material.angular.io/assets/img/examples/shiba1.jpg')";;
  
 
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
     // debugger;
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
