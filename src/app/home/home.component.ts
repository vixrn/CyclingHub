import { Component, OnInit } from '@angular/core';
import { WeatherService, Weather } from '../weather.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  info: Observable<Weather[]>;

  lat: number;
  lng: number;
  city: string;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {

    this.info = this._weatherService.info;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
       this.lat = position.coords.latitude;
       this.lng = position.coords.longitude;
     });
   } else {
     /// default coords
    this.lat = 40.73;
    this.lng = -73.93;
   }
  }

  getForecast(city: string) {
    this._weatherService.currentForecastCity(city);
  }

  // weatherIcon(icon) {
  //   switch (icon) {
  //     case 'partly-cloudy-day':
  //       return 'wi wi-day-cloudy'
  //     case 'clear-day':
  //       return 'wi wi-day-sunny'
  //     case 'partly-cloudy-night':
  //       return 'wi wi-night-partly-cloudy'
  //     default:
  //       return `wi wi-day-sunny`
  //   }
  // }

}
