import { Component } from '@angular/core';
import { RootScopeService } from '../../core/services/root-scope.service';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-privacypolicy',
  templateUrl: './privacypolicy.component.html',
  styleUrls: ['./privacypolicy.component.scss']
})
export class PrivacypolicyComponent {
  lang: String = '';

  constructor(private rootScope: RootScopeService, private sharedService: SharedService) 
  { 
    this.lang = this.rootScope.getLanguage();
    this.sharedService.message$.subscribe(lang => {
      this.lang = lang;
    });
  }
}
