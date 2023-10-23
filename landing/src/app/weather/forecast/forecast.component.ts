import { Component } from '@angular/core';
import { ForecastService, ForecastType } from '../forecast.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {

  forecast$: Observable<ForecastType[]>;



  constructor(
    private readonly forecastService: ForecastService
  ) {

     this.forecast$= forecastService.getForecast()
    // .subscribe(
    //   (forecastData) => {
    //     this.forecastData = forecastData;
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // )
  }

}
