import { Component } from '@angular/core';
import { faLock, faChartLine, faTint, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  faLock = faLock;
  faChartLine = faChartLine;
  faTint = faTint;
  faPuzzlePiece = faPuzzlePiece;

  getFinancial() {
    alert('getFinancial');
  }

  startToInvest() {
    alert('startToInvest');
  }

  showPreviousProperties() {
    alert('showPreviousProperties');
  }
}
