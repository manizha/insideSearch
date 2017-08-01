import { Component, ViewEncapsulation } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'site-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TopNavComponent {
  baseUrl = environment.baseUrl;
  panwHomeUrl = environment.panwHomeUrl;
  liveCommunityUrl = environment.liveCommunityUrl;
}
