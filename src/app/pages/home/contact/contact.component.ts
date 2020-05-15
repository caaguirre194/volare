import { Component, OnInit } from "@angular/core";
import { trigger, transition, useAnimation } from "@angular/animations";
import { fadeInLeft } from "ng-animate";
import { isNullOrUndefined } from "util";
import { MessageServiceService } from "../../../services/message-service.service";
import { Message } from "../../../models/message";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
  animations: [
    trigger("fadeInLeft", [transition("* => *", useAnimation(fadeInLeft))]),
  ],
})
export class ContactComponent implements OnInit {
  fadeInLeft: any;
  loading = false;
  message: Message;

  constructor(public messageService: MessageServiceService) {}

  ngOnInit() {
    this.message = new Message();
  }

  resetForm() {
    document.getElementById("input-name").classList.remove("is-valid");
    document.getElementById("input-issue").classList.remove("is-valid");
    document.getElementById("input-email").classList.remove("is-valid");
    document.getElementById("input-message").classList.remove("is-valid");
    this.message = new Message();
  }

  openDialogDanger() {
    document.getElementById("alert-danger").style.display = "block";
    const box = document.getElementById("alert-danger");

    setTimeout(function () {
      box.classList.add("visuallyhidden");
      box.addEventListener(
        "transitionend",
        function (e) {
          box.classList.add("hidden");
        },
        {
          capture: false,
          once: true,
          passive: false,
        }
      );
      box.classList.remove("hidden");
      box.classList.remove("visuallyhidden");
      document.getElementById("alert-danger").style.display = "none";
    }, 8000);
  }

  openDialogSuccess() {
    document.getElementById("alert-success").style.display = "block";
    const box = document.getElementById("alert-success");

    setTimeout(function () {
      box.classList.add("visuallyhidden");
      box.addEventListener(
        "transitionend",
        function (e) {
          box.classList.add("hidden");
        },
        {
          capture: false,
          once: true,
          passive: false,
        }
      );
      box.classList.remove("hidden");
      box.classList.remove("visuallyhidden");
      document.getElementById("alert-success").style.display = "none";
    }, 8000);
  }

  sendService(form) {
    this.loading = true;

    return new Promise((resolve, reject) => {
      this.messageService.sendMessage(form).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  sendEmail() {
    const isEmail = this.validateEmail(this.message.email);

    const isMessaje = this.message.message === "";
    this.validateInput(!isMessaje, document.getElementById("input-message"));

    const isName = this.message.name === "";
    this.validateInput(!isName, document.getElementById("input-name"));

    const isIssue = this.message.issue === "";
    this.validateInput(!isIssue, document.getElementById("input-issue"));

    if (!isMessaje && !isName && isEmail && !isIssue) {
      const body = {
        nombre: this.message.name,
        asunto: this.message.issue,
        email: this.message.email,
        mensaje: this.message.message,
      };

      this.sendService(body)
        .then((data) => {
          document.getElementById("alert-success").style.display = "block";
          this.openDialogSuccess();
          this.resetForm();
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          document.getElementById("alert-danger").style.display = "block";
          this.openDialogDanger();
          this.resetForm();
          this.loading = false;
        });
    }
  }

  validateEmail(search: string) {
    if (!isNullOrUndefined(search)) {
      var serchfind: boolean;
      var regexp = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      serchfind = regexp.test(search.trim());
      if (serchfind === false) {
        this.validateInput(false, document.getElementById("input-email"));
      } else {
        this.validateInput(true, document.getElementById("input-email"));
      }
      return serchfind;
    } else {
      this.validateInput(false, document.getElementById("input-email"));
      return false;
    }
  }

  validateInput(state: boolean, obj: any) {
    if (state === false) {
      if (obj.classList.contains("is-valid")) {
        obj.classList.remove("is-valid");
      }
      obj.classList.add("is-invalid");
    } else {
      if (obj.classList.contains("is-invalid")) {
        obj.classList.remove("is-invalid");
      }
      obj.classList.add("is-valid");
    }
  }
}
