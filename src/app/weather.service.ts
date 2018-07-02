import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface Weather {
  base: string;
  clouds: Clouds[];
  cod: string;
  coord: Coord[];
  dt: string;
  id: string;
  main: Main[];
  name: string;
  sys: Sys[];
  visibility: string;
  weather: WeatherInfo[];
  wind: Wind[];  
}

export interface Coord {
  lon: number;
  lat: number;
}
export interface WeatherInfo {
  id: number;
  main: string;
  description: string;
  icon: number;
}
export interface Main {
  temp: string;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}
export interface Wind {
  speed: number;
  deg: number;
}
export interface Clouds {
  all: number;
}
export interface Sys {
  type: number;
  id: number;
  message: string;
  country: string;
  sunrise: number;
  sunset: number;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  info: Observable<Weather[]>;

  private url = 'http://api.openweathermap.org/data/2.5/weather?q=';

  constructor(private http: HttpClient) { }

  public currentForecastCity(city: string) {
    this.http.get(this.url + city + "&appid=57346ddfb71ab52306de15337ca1e356").subscribe(data => {
      this.info = data as Observable<Weather[]>;
      console.log(data);
    }, error => console.error(error));
  }
}
