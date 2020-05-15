import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ParticlesConfig1 } from '../../../../environments/environment.prod';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';

declare let particlesJS: any;

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))])
  ]
})
export class InitComponent implements OnInit {
  fadeIn: any;

  constructor() { }

  ngOnInit() {
    this.invokeParticles();
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig1, function() {});
  }

}
