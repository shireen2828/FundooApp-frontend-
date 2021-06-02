import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 

  mediaQuery: MediaQueryList;
  value = 'Search';

  constructor(media: MediaMatcher) {
    this.mediaQuery = media.matchMedia('(max-width: 600px');

   }

  ngOnInit(): void {
  }

}
