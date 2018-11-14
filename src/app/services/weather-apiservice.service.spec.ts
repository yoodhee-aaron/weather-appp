import { TestBed } from '@angular/core/testing';

import { WeatherAPIServiceService } from './weather-apiservice.service';

describe('WeatherAPIServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherAPIServiceService = TestBed.get(WeatherAPIServiceService);
    expect(service).toBeTruthy();
  });
});
