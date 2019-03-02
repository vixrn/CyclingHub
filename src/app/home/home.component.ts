import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  weather: any;
  currentLocation: any;
  time: number = 0;
  interval;

  lat: number;
  lng: number;
  city: string;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.refreshData()
  }

  getForecast(city: string) {
    this._weatherService.currentForecastCity(city);
  }
  private refreshData(): void {
    this.weather = this._weatherService.info
    this.currentLocation = this._weatherService.info2
    this.subscribeToData();
  }
  private subscribeToData(): void {
    this.interval = setInterval(() =>{
      if(this.time != 1){
        this.time++
      }else{
        this.time = 0
        this.refreshData()
      }
    }, 1000)
  }
}

