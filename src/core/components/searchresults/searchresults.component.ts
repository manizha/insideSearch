import { Component, ViewEncapsulation } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
declare var $: any;
declare var Coveo: any;

@Component({
  selector: 'coveo-search-results',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchResultsComponent {

  ngAfterViewInit() {

  }
}
