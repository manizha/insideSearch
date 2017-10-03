import { Component, ViewEncapsulation, OnInit} from '@angular/core';
import { environment } from '../../../environments/environment';
declare var $: any;

@Component({
  selector: 'site-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class FooterComponent implements OnInit {
  logo = 'assets/images/logo.png';
  baseUrl = environment.baseUrl;

  ngOnInit() {

  }

  ngAfterViewInit() {
    $(document).foundation();
  }
}

