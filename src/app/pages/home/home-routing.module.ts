import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { ContactComponent } from "./contact/contact.component";
import { PlansComponent } from "./plans/plans.component";
import { AboutComponent } from "./about/about.component";
import { InitComponent } from "./init/init.component";
import { Plans2Component } from "./plans2/plans2.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "", component: InitComponent },
      { path: "init", component: InitComponent },
      { path: "contact", component: ContactComponent },
      { path: "plans", component: PlansComponent },
      { path: "plans2", component: Plans2Component },
      { path: "about", component: AboutComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
