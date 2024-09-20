import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';

import { RootScopeService } from './core/services/root-scope.service';
import { UserInfo } from './core/user-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'angular15_invesafe';
  lang: string;
  canInvest = false;
  userInfo:UserInfo = <UserInfo>{};

  constructor( private rootScope: RootScopeService, private translate: TranslateService) { 
    this.lang = this.rootScope.getLanguage();
    this.userInfo = this.rootScope.getUserInfo();
    this.rootScope.setLanguage(this.lang);
    this.translate.use(this.lang);
  }

  ngAfterViewInit() {
    if ($("#load_screen").length == 1) {
      $("#load_screen").delay(1000).fadeOut(function () {
        $('body').addClass('enable-scroll');
        $("#load_screen").remove();
      });
    };
  }

}