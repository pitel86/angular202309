import { Component, Input, OnInit } from '@angular/core';
import { PowerRangerI } from '../interfaces/models';

@Component({
  selector: 'app-rangers',
  templateUrl: './rangers.component.html',
  styleUrls: ['./rangers.component.scss']
})
export class RangersComponent implements OnInit{
  @Input() powerRangers!: PowerRangerI[];

  ngOnInit(): void {
    console.log(this.powerRangers)
  }
}
