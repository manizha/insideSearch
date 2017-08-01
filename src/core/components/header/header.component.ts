import { Component, ViewEncapsulation } from '@angular/core';
import { environment } from '../../../environments/environment';
declare var $: any;

@Component({
  selector: 'site-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent {
  logo = 'assets/images/logo.png';
  baseUrl = environment.baseUrl;

  ngAfterViewInit(){
    $(document).foundation();
  }
}
