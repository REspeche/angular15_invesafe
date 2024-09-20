import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';

import { RightIconsComponent } from './components/right-icons/right-icons.component';
import { FlagsLanguageComponent } from './flags-language/flags-language.component';

@NgModule({
  declarations: [
    RightIconsComponent,
    FlagsLanguageComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TranslateModule.forChild()
  ],
  exports: [
    RightIconsComponent,
    FlagsLanguageComponent,
    TranslateModule
  ]
})
export class SharedModule { }
