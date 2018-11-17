import { Injectable } from '@angular/core';
import { ICurrentWeather } from '../interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
interface ICurrentWeatherData {
  weather: [{
    description: string,
    icon: string,
  }];
  main: {
    temp: number,
  };
  name: string;
  dt: number;
  sys: {
    country: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private httpClient: HttpClient) { }

  weatherAPI(city: string, country: string): Observable<ICurrentWeather> {
    return this.httpClient
    .get<ICurrentWeatherData>(this.OpenWeatherMap(city, country))
    .pipe(map(data => this.transformToICurrentWeather(data)));


  }

  private transformToICurrentWeather(data: ICurrentWeatherData): ICurrentWeather {
    return {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: this.convertKelvinToFahrenheit(data.main.temp),
      description: data.weather[0].description,
    };
  }

  convertKelvinToFahrenheit(kelvin: number): number {
   return kelvin * 9 / 5 - 459.67; }

  private OpenWeatherMap(city, country): string {
    console.log(city, country);

    return `${environment.baseUrl}api.openweathermap.org/data/2.5/weather?` +  `q=${city},${country}&appid=${environment.appId} `;
  }
}
