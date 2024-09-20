import { Component } from '@angular/core';
import { RootScopeService } from '../../core/services/root-scope.service';
import { faCircle, faHandHoldingUsd, faLock, faChartLine, faTint, faCouch, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-operative',
  templateUrl: './operative.component.html',
  styleUrls: ['./operative.component.scss']
})
export class OperativeComponent {
  faCircle = faCircle;
  faHandHoldingUsd = faHandHoldingUsd;
  faLock = faLock;
  faChartLine = faChartLine;
  faTint = faTint;
  faCouch = faCouch;
  faPuzzlePiece = faPuzzlePiece;
  lang: String = '';

  constructor(private rootScope: RootScopeService) 
  { 
    this.lang = this.rootScope.getLanguage();
  }
}
