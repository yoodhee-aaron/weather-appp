import { Component, OnInit } from '@angular/core';
import {ICurrentWeather} from '../interfaces';
import {WeatherService} from '../services/weather.service';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {

  current: ICurrentWeather;
  constructor(private weatherService: WeatherService ) {
    }

  ngOnInit() {
      this.weatherSession();
  }
  weatherSession() {
    this.weatherService.weatherAPI('London', 'UK')
    .subscribe(data => (this.current = data));

  }
}
