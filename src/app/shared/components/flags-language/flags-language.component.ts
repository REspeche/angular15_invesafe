import { Component } from '@angular/core';
import { RootScopeService } from '../../../core/services/root-scope.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-flags-language',
  templateUrl: './flags-language.component.html',
  styleUrls: ['./flags-language.component.scss']
})
export class FlagsLanguageComponent {
  lang: String = '';

  constructor(private rootScope: RootScopeService, private translate: TranslateService) 
  { 
    this.lang = this.rootScope.getLanguage();
  }

  changeLanguage(lang: string) {
    this.lang = lang;
    this.rootScope.setLanguage(lang);
    this.translate.use(lang);
  }
}
