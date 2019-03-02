import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { WeatherService } from './weather.service';
import { Subscription } from 'rxjs/Subscription';
import { Weather } from './weather';

@Injectable()
export class WeatherResolve implements Resolve<any> {
  private lat: number = 40.73;
  private lng: number = -73.93;
  private time: number = 1;
  private refreshtime: number = 0;
  private stoprefresh: number = 0;
  private interval;

  constructor(private dataservice: WeatherService) { }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): any {
   this.refreshData();
  }
  private refreshData() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
    if(this.refreshtime !=2){
      this.subscribeToData();
      this.refreshtime++;
      this.stoprefresh++;
    }
    if(this.stoprefresh == 2){
      this.stoprefresh = 0;
      return this.dataservice.forecastForCurrentPosition(this.lat, this.lng)
    }
  }
  private subscribeToData(): void {
    this.interval = setInterval(() => {
      if (this.time != 1) {
        this.time++
      } else {
        this.time = 0
        this.refreshData()
      }
    }, 1000)
  }
}