import { Component } from '@angular/core';
import { RootScopeService } from '../../core/services/root-scope.service';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-accessibilitystatement',
  templateUrl: './accessibilitystatement.component.html',
  styleUrls: ['./accessibilitystatement.component.scss']
})
export class AccessibilitystatementComponent {
  lang: String = '';

  constructor(private rootScope: RootScopeService, private sharedService: SharedService) 
  { 
    this.lang = this.rootScope.getLanguage();
    this.sharedService.message$.subscribe(lang => {
      this.lang = lang;
    });
  }
}
