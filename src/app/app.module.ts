import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './user/home/home.component';
import { AboutComponent } from './user/about/about.component';
import { OperativeComponent } from './user/operative/operative.component';
import { ProjectsComponent } from './user/projects/projects.component';
import { DevelopersComponent } from './user/developers/developers.component';
import { ContactComponent } from './user/contact/contact.component';
import { ChangelogComponent } from './user/changelog/changelog.component';
import { PrivacypolicyComponent } from './user/privacypolicy/privacypolicy.component';
import { TermsofuseComponent } from './user/termsofuse/termsofuse.component';
import { AccessibilitystatementComponent } from './user/accessibilitystatement/accessibilitystatement.component';

declare global {
  interface Window { 
    Modernizr: any;
  }
  interface JQuery {
    chosen(options?:any):JQuery;
  }
}

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    OperativeComponent,
    ProjectsComponent,
    DevelopersComponent,
    ContactComponent,
    ChangelogComponent,
    PrivacypolicyComponent,
    TermsofuseComponent,
    AccessibilitystatementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    FontAwesomeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    TranslateModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }