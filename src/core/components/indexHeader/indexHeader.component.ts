import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
declare var $: any;

@Component({
  selector: 'site-index',
  templateUrl: './indexHeader.component.html',
  styleUrls: ['./indexHeader.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class IndexHeaderComponent implements OnInit {
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
//   if (windowURL.indexOf('search') !== -1) {
//     $('#show-this').removeAtr('id');
//   }
//
// });
