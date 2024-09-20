import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './user/home/home.component';
import { AboutComponent } from './user/about/about.component';
import { OperativeComponent } from './user/operative/operative.component';
import { ProjectsComponent } from './user/projects/projects.component';
import { DevelopersComponent } from './user/developers/developers.component';
import { ContactComponent } from './user/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { 
    path: 'home',
    component: HomeComponent,
    title: 'INVESAFE | Real estate crowdfunding platform'
  },
  { 
    path: 'about',
    component: AboutComponent,
    title: 'INVESAFE - About us'
  },
  { 
    path: 'operative',
    component: OperativeComponent,
    title: 'INVESAFE - How we working?'
  },
  { 
    path: 'projects',
    component: ProjectsComponent,
    title: 'INVESAFE - Marketplace'
  },
  { 
    path: 'developers',
    component: DevelopersComponent,
    title: 'INVESAFE - I\'m a Developer'
  },
  { 
    path: 'contact',
    component: ContactComponent,
    title: 'INVESAFE - Contact us'
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
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }