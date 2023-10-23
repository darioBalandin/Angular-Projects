import { Injectable } from '@angular/core';
import { Observable, filter, map, mergeMap, of, pluck, share, switchMap, toArray } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  private BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

  constructor(
    private readonly http: HttpClient
  ) { }

  getForecast(): Observable<ForecastType[]> {
    return this.getCurrentLocation().pipe(
      map(coords => {
        return new HttpParams()
          .set('lat', String(coords.latitude))
          .set('lon', String(coords.longitude))
          .set('units', 'metric')
          .set('appid', 'c1a5f9fb200de1b2c198fbe5ce6fe17e')
      }),
      switchMap(params =>
        this.http.get<OpenWeatherResponse>(this.BASE_URL, { params })
      ),
      pluck('list'),
      mergeMap(value => of(...value)),
      filter((value, index) => {
        return index % 8 === 0;
      }),
      map(value => {
        return {
          dateString: value.dt_txt,
          temp: value.main.temp
        };
      }
      ),
      toArray(),
      // Con share creamos un multicast observable, es decir un solo mensaje se envia a todas las diferentes subscripciones
      // en vez de ejecutarse la pipe por cada subscripcion
      share()
    );

  }


  getCurrentLocation() {

    return new Observable<GeolocationCoordinates>((observer) => {

      window.navigator.geolocation.getCurrentPosition(

        (position) => {
          observer.next(position.coords);
          observer.complete();
        },
        (error) => {
          observer.error(error)
        }
      )

    })

  }
}

export type OpenWeatherResponse = {
  list: {
    dt_txt: string,
    main: {
      temp: number
    }
  }[]
}

export type ForecastType = {
  dateString: string,
  temp: number
}
