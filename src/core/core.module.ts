import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { IndexHeaderComponent } from './components/indexHeader/indexHeader.component';
import { NavleftComponent } from './components/navleft/navleft.component';
import { SearchComponent } from './components/search/search.component';
import { JiveSearchComponent } from './components/jivesearch/jiveSearch.component';
import { SearchResultsComponent } from './components/searchresults/searchresults.component';
import { HomePageComponent } from './components/homepage/homepage.component';
import { TektalkHeaderComponent } from "./components/tektalk-header/tektalk-header.component";

@NgModule({
  declarations: [
    HeaderComponent,
    NavleftComponent,
    IndexHeaderComponent,
    SearchComponent,
    JiveSearchComponent,
    SearchResultsComponent,
    HomePageComponent,
    TektalkHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [

  ],
  entryComponents: [
    HeaderComponent,
    NavleftComponent,
    IndexHeaderComponent,
    SearchComponent,
    JiveSearchComponent,
    SearchResultsComponent,
    HomePageComponent,
    TektalkHeaderComponent
  ]
})
export class CoreModule {
  ngDoBootstrap(appRef: ApplicationRef) {
    if(document.querySelector('site-header')) {
      appRef.bootstrap(HeaderComponent);
    }

    if(document.querySelector('site-tektalk-header')) {
      appRef.bootstrap(TektalkHeaderComponent);
    }

    if(document.querySelector('site-footer')) {
      appRef.bootstrap(NavleftComponent);
    }

    if(document.querySelector('site-index')) {
      appRef.bootstrap(IndexHeaderComponent);
    }

    if(document.querySelector('coveo-search')) {
      appRef.bootstrap(SearchComponent);
    }

    if(document.querySelector('jive-search')) {
      appRef.bootstrap(JiveSearchComponent);
    }

    if(document.querySelector('coveo-search-results')) {
      appRef.bootstrap(SearchResultsComponent);
    }

    if(document.querySelector('site-homepage')) {
      appRef.bootstrap(HomePageComponent);
    }
  }
}
