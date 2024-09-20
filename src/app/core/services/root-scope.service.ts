import { Injectable } from '@angular/core';
import { UserInfo } from '../user-info';

@Injectable({
  providedIn: 'root'
})
export class RootScopeService {
  defaultLang = 'en';
  userInfo: UserInfo = <UserInfo>{};
  canInvest: Boolean = false;

  constructor() { }

  getUserInfo () {
    return this.userInfo;
  }

  getCanInvest<Boolean>() {
    return this.canInvest;
  }

  getLanguage<String>() {
    return localStorage.getItem('lang') || this.defaultLang;
  }

  setLanguage(lang: string): void {
    this.defaultLang = lang;
    localStorage.setItem('lang', lang);
  }
}
