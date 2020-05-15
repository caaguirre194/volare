import { Component, OnInit, Input } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  langs: string[] = [];

  constructor(private translate: TranslateService) {
    this.langs = this.translate.getLangs();
  }

  onChange(x) {
    if(x === 'es'){
      document.getElementById("img-lenguage").style.backgroundImage = "url('../../../assets/img/flags/4x3/es.svg')";
    } else {
      document.getElementById("img-lenguage").style.backgroundImage = "url('../../../assets/img/flags/4x3/en.svg')";
    }
    this.translate.use(x);
  }

  ngOnInit() {
  }

}
