import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';
// import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  info: any;
  info2:any;

  private url = 'https://api.openweathermap.org/data/2.5/forecast?q=';
  private url2 = 'https://api.openweathermap.org/data/2.5/weather?lat='
  private key = '&appid=c67fa19d84e2c9b9a9ee2c6524e8367c';

  constructor(private http: HttpClient) { }

  public currentForecastCity(city: string) {
    return this.http.get(this.url + city + this.key).subscribe(data => {
      this.info = data as any;
      console.log(data);
    }, error => console.error(error));
  }

  public forecastForCurrentPosition(lat: number, lng: number){
    return this.http.get<any>(this.url2 + lat + '&lon=' + lng + this.key).subscribe(x => {
      this.info2 = x as any;
      console.log(x)
    }, error => console.error(error));
  }
  public returnList(): void{
    return this.info
  }
}
