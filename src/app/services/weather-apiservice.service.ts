import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ICurrentWeather} from '../interfaces';

@Injectable({providedIn: 'root'})
export class Service {
  constructor(private httpClient: HttpClient) { }
}

