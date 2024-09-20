import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';

import { RightIconsComponent } from './components/right-icons/right-icons.component';
import { FlagsLanguageComponent } from './components/flags-language/flags-language.component';
import { BannerPageComponent } from './components/banner-page/banner-page.component';
import { CustomCurrencyPipe } from './pipes/custom-currency.pipe';
import { ScrollToTopDirective } from './directives/scroll-to-top.directive';

@NgModule({
  declarations: [
    RightIconsComponent,
    FlagsLanguageComponent,
    BannerPageComponent,
    CustomCurrencyPipe,
    ScrollToTopDirective
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TranslateModule.forChild()
  ],
  exports: [
    RightIconsComponent,
    FlagsLanguageComponent,
    TranslateModule,
    BannerPageComponent,
    ScrollToTopDirective
  ]
})
export class SharedModule { }
