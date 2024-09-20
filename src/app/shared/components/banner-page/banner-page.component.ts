import { Component, Input } from '@angular/core';
import { faFacebookF, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-banner-page',
  templateUrl: './banner-page.component.html',
  styleUrls: ['./banner-page.component.scss']
})
export class BannerPageComponent {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() image: string = '';
  @Input() showsocials!: any;
  @Input() size: string = '';
  @Input() align: string = '';

  faFacebookF = faFacebookF;
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;
  faInstagram = faInstagram;

  constructor () {
    if (!this.showsocials) this.showsocials = 0;
    if (!this.size) this.size = 'lg';
    if (!this.align) this.align = 'end';
  }
}
