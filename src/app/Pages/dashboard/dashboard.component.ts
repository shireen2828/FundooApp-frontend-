import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit, Directive, QueryList } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  mobileQuery: MediaQueryList;
  value = 'Search';

  constructor(media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px');

   }

  ngOnInit(): void {
  }

}
