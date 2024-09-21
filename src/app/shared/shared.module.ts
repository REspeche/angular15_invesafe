import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

import { RightIconsComponent } from './components/right-icons/right-icons.component';
import { FlagsLanguageComponent } from './components/flags-language/flags-language.component';
import { BannerPageComponent } from './components/banner-page/banner-page.component';
import { CustomCurrencyPipe } from './pipes/custom-currency.pipe';
import { ScrollToTopDirective } from './directives/scroll-to-top.directive';
import { MenuLegalComponent } from './components/menu-legal/menu-legal.component';

@NgModule({
  declarations: [
    RightIconsComponent,
    FlagsLanguageComponent,
    BannerPageComponent,
    CustomCurrencyPipe,
    ScrollToTopDirective,
    MenuLegalComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TranslateModule.forChild(),
    RouterLink
  ],
  exports: [
    RightIconsComponent,
    FlagsLanguageComponent,
    TranslateModule,
    BannerPageComponent,
    ScrollToTopDirective,
    MenuLegalComponent
  ]
})
export class SharedModule { }
