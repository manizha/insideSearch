import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { TopNavComponent } from './components/topnav/topnav.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,    
    TopNavComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    
  ],
  entryComponents: [
    HeaderComponent,
    FooterComponent,    
    TopNavComponent,
    SearchComponent
  ]
})
export class CoreModule { 
  ngDoBootstrap(appRef: ApplicationRef) {
    if(document.querySelector('site-header')) {
      appRef.bootstrap(HeaderComponent);
    }

    if(document.querySelector('site-footer')) {
      appRef.bootstrap(FooterComponent);
    }

    if(document.querySelector('site-topnav')) {
      appRef.bootstrap(TopNavComponent);
    }

    if(document.querySelector('coveo-search')) {
      appRef.bootstrap(SearchComponent);
    }
  }
}
