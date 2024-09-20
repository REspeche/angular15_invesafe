import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './user/home/home.component';
import { AboutComponent } from './user/about/about.component';

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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { 
        //enableTracing: true, // <-- debugging purposes only
        onSameUrlNavigation: 'reload' 
      } 
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }