import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  readonly ROOT_URL = 'https://api.darksky.net/forecast/5bb4e56b1d63656385313bdd46c094ed/';

  constructor(private http: HttpClient) { }

  currentForecast(lat: number, lng: number): Observable<any> {
    let params = new HttpParams()
    params = params.set('lat', lat.toString())
    params = params.set('lng', lng.toString())

    return this.http.get(this.ROOT_URL, { params })
  }
}
