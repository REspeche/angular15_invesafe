import { Component } from '@angular/core';
import { RootScopeService } from '../../core/services/root-scope.service';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-termsofuse',
  templateUrl: './termsofuse.component.html',
  styleUrls: ['./termsofuse.component.scss']
})
export class TermsofuseComponent {
  lang: String = '';

  constructor(private rootScope: RootScopeService, private sharedService: SharedService) 
  { 
    this.lang = this.rootScope.getLanguage();
    this.sharedService.message$.subscribe(lang => {
      this.lang = lang;
    });
  }
}
