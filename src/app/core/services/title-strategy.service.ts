import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomTitleStrategyService extends TitleStrategy {

  constructor(private readonly titleService: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const baseTitle = 'INVESAFE'; // I don't want get this value from resource translate because it will be only in english
    const routeTitle = this.buildTitle(routerState);
    
    if (routeTitle) {
      this.titleService.setTitle(`${baseTitle} | ${routeTitle}`);
    } else {
      this.titleService.setTitle(baseTitle);
    };
  }
}