import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
declare var $: any
declare var Coveo: any


@Component({
  selector: 'site-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class HomePageComponent implements OnInit {
  homeImg = 'assets/img/Communities-Banner-Join-Discussion.jpg';
  baseUrl = environment.baseUrl;

  ngOnInit() {

  }

  ngAfterViewInit() {
    $(document).foundation();
  }
}


