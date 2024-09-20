import { Component } from '@angular/core';
import { faCircle, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent {
  faCircle = faCircle;
  faCheck = faCheck;

  constructor() {}
}
