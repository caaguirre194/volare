import { Component, OnInit, HostListener } from "@angular/core";
import {
  trigger,
  transition,
  useAnimation,
  state,
  style,
  animate
} from "@angular/animations";
import { zoomIn, swing } from "ng-animate";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
  animations: [
    trigger("zoomIn", [transition("* => *", useAnimation(zoomIn))]),
    trigger("swing", [transition("* => *", useAnimation(swing))])
    ]
})
export class AboutComponent implements OnInit {
  zoomIn: any;
  swing: any;

  constructor() {}

  ngOnInit() {}
}
