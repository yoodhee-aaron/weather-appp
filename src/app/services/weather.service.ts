import { Injectable } from '@angular/core';

interface ICurrentWeatherData {
  Weather: [{
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

  constructor() { }
}
