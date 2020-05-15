import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";
import * as $ from "jquery";
import { trigger, transition, useAnimation } from "@angular/animations";
import { bounceIn } from "ng-animate";
import { PROJECTS } from "../../../../environments/environment.prod";

@Component({
  selector: "app-plans",
  templateUrl: "./plans.component.html",
  styleUrls: ["./plans.component.css"],
  animations: [
    trigger("bounceIn", [transition("* => *", useAnimation(bounceIn))]),
  ],
})
export class PlansComponent implements OnInit {
  bounceIn: any;
  plans = PROJECTS;

  constructor(private router: Router) {}

  ngOnInit() {}

  ngAfterViewInit() {
    $(".col-project").on("mouseover", function () {
      $(".col-project").css({
        opacity: "0.5",
      });
      $(this).css({
        opacity: "1",
        cursor: "pointer",
      });
    });
    $(".col-project").on("mouseout", function () {
      $(".col-project").css({
        opacity: "1",
      });
    });
  }

  redirectTO(url) {
    window.open(url, "_blank");
  }
}
