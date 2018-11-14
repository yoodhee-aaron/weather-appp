import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class Service {
  constructor(private httpClient: HttpClient) { }

  weatherAPI() {
    return this.httpClient.get(this.OpenWeatherMap());
  }

  private OpenWeatherMap(): string {
    return 'api.openweathermap.org/data/2.5/weather?q=London,uk ';
  }
}

