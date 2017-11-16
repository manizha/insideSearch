import { Component, ViewEncapsulation, OnInit} from '@angular/core';
import { environment } from '../../../environments/environment';
declare var $: any;

@Component({
  selector: 'site-navleft',
  templateUrl: './navleft.component.html',
  styleUrls: ['./navleft.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class NavleftComponent implements OnInit {
  logo = 'assets/images/logo.png';
  baseUrl = environment.baseUrl;

  ngOnInit() {

  }

  ngAfterViewInit() {
    $(document).foundation();
  }
}

