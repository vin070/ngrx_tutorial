import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reset-svg',
  templateUrl: './reset-svg.component.html'
})
export class ResetSvgComponent {
  @Input() width: string = '16';
  @Input() height: string = '16';
  @Input() fill: string = 'darkgray';
  
  constructor() {}
}