import { Component, Input } from '@angular/core';
import { PowerRangerI } from '../interfaces/models';

@Component({
  selector: 'app-ranger',
  templateUrl: './ranger.component.html',
  styleUrls: ['./ranger.component.scss']
})
export class RangerComponent {
  @Input() ranger!: PowerRangerI;
}
