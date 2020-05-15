import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbIconModule } from '@nebular/theme';
import {NbButtonModule, NbLayoutModule, NbSidebarModule, NbMenuModule} from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { TranslateModule } from "@ngx-translate/core";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule,
    NbIconModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
