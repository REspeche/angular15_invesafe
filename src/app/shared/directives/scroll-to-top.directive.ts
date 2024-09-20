import { Directive, HostListener, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appScrollToTop]'
})
export class ScrollToTopDirective {

  constructor(@Inject(DOCUMENT) private document: Document) {}

  @HostListener('click')
  onClick() {
    this.document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }
}