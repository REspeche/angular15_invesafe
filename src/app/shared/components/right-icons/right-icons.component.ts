import { Component } from '@angular/core';
import { RootScopeService } from '../../../core/services/root-scope.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { UserInfo } from '../../../user-info';

@Component({
  selector: 'app-right-icons',
  templateUrl: './right-icons.component.html',
  styleUrls: ['./right-icons.component.scss']
})
export class RightIconsComponent {
  faUser = faUser;
  alerts = {
    cart: 0
  };
  canInvest: Boolean = false;
  userInfo!: UserInfo;

  constructor(private rootScope: RootScopeService) {
    this.canInvest = this.rootScope.getCanInvest();
    this.userInfo = this.rootScope.getUserInfo();
  }
}
