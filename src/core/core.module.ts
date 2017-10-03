import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { IndexHeaderComponent } from './components/indexHeader/indexHeader.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { SearchResultsComponent } from './components/searchresults/searchresults.component';
import { HomePageComponent } from './components/homepage/homepage.component'
import { ScriptTemplateComponent } from '../shared/components/scripttemplate/scripttemplate.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    IndexHeaderComponent,
    SearchComponent,
    SearchResultsComponent,
    HomePageComponent,
    ScriptTemplateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [

  ],
  entryComponents: [
    HeaderComponent,
    FooterComponent,
    IndexHeaderComponent,
    SearchComponent,
    SearchResultsComponent,
    HomePageComponent
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

    if(document.querySelector('site-index')) {
      appRef.bootstrap(IndexHeaderComponent);
    }

    if(document.querySelector('coveo-search')) {
      appRef.bootstrap(SearchComponent);
    }

    if(document.querySelector('coveo-search-results')) {
      appRef.bootstrap(SearchResultsComponent);
    }

    if(document.querySelector('site-homepage')) {
      appRef.bootstrap(HomePageComponent);
    }
  }
}
