import { NgModule } from '@angular/core';
import { RouterModule, Routes, TitleStrategy } from '@angular/router';
import { CustomTitleStrategyService } from './core/services/title-strategy.service';

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

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { 
    path: 'home',
    component: HomeComponent,
    title: 'Real estate crowdfunding platform'
  },
  { 
    path: 'about',
    component: AboutComponent,
    title: 'About us'
  },
  { 
    path: 'operative',
    component: OperativeComponent,
    title: 'How we working?'
  },
  { 
    path: 'projects',
    component: ProjectsComponent,
    title: 'Marketplace'
  },
  { 
    path: 'developers',
    component: DevelopersComponent,
    title: 'I\'m a Developer'
  },
  { 
    path: 'contact',
    component: ContactComponent,
    title: 'Contact us'
  },
  { 
    path: 'changelog',
    component: ChangelogComponent,
    title: 'Change log'
  },
  { 
    path: 'privacypolicy',
    component: PrivacypolicyComponent,
    title: 'Privacy Policy'
  },
  { 
    path: 'termsofuse',
    component: TermsofuseComponent,
    title: 'Terms of use'
  },
  { 
    path: 'accessibilitystatement',
    component: AccessibilitystatementComponent,
    title: 'Accessibility statement'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { 
        //enableTracing: true, // <-- debugging purposes only
        onSameUrlNavigation: 'reload',
        scrollPositionRestoration: 'enabled'
      } 
    )
  ],
  providers: [
    { provide: TitleStrategy, useClass: CustomTitleStrategyService }
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }