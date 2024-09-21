import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private messageSource = new Subject<string>();
  message$ = this.messageSource.asObservable();

  sendUpdateLanguage(lang: string) {
    this.messageSource.next(lang);
  }
}