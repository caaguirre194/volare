import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../components/components.module";
import { NbThemeModule } from "@nebular/theme";
import {
  NbMenuModule,
  NbSidebarModule,
  NbLayoutModule,
  NbRouteTabsetModule,
  NbChatModule,
} from "@nebular/theme";
import {
  NbCardModule,
  NbInputModule,
  NbPopoverModule,
  NbTooltipModule,
  NbSpinnerModule,
} from "@nebular/theme";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { ContactComponent } from "./contact/contact.component";
import { PlansComponent } from "./plans/plans.component";
import { AboutComponent } from "./about/about.component";
import { InitComponent } from "./init/init.component";
import { TranslateModule } from "@ngx-translate/core";
import { FormsModule } from "@angular/forms";
import { YouTubePlayerModule } from "@angular/youtube-player";
import { Plans2Component } from "./plans2/plans2.component";
import { from } from "rxjs";

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    PlansComponent,
    AboutComponent,
    InitComponent,
    Plans2Component,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbThemeModule.forRoot({ name: "default" }),
    NbLayoutModule,
    NbRouteTabsetModule,
    NbCardModule,
    YouTubePlayerModule,
    NbInputModule,
    NbPopoverModule,
    NbTooltipModule,
    NbChatModule,
    NbSpinnerModule,
    ComponentsModule,
    TranslateModule,
    FormsModule,
  ],
})
export class HomeModule {}
