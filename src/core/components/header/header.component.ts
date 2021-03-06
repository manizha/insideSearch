import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
declare var $: any;

@Component({
  selector: 'site-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent implements OnInit {
  logo = 'assets/images/logo.png';
  baseUrl = environment.baseUrl;

  ngOnInit() {

  }

  ngAfterViewInit() {
    $(document).foundation();
  }
}

// $(document).ready(function() {
//   const windowURL = window.location.href;
//
//   if (windowURL.indexOf('tektalk-search') !== -1) {
//     $('.show-this').removeAttr('class');
//     $('#tekTalkSearch').removeAttr('id');
//   }
//   else {
//     $('#jiveSearch').removeAttr('id');
//   }
// });


