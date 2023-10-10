import { Component, Input } from '@angular/core';
import { StatsType } from '../views-home/views-home.component';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {


  @Input() data: StatsType[] = [];
}
