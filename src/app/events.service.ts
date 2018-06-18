import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export interface Event{
  _id:number;
  _rev:number;
  Name: string;
  Times:{};
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  events:any=[];

  private getapiURL: string = "http://127.0.0.1:5984/cyclingevents/6939516e67b9419552fae8cd32003445";

  constructor(private http:HttpClient) { }

  public getEvent1(){
    this.http.get(this.getapiURL).subscribe(data => {
      this.events = data;
      this.events = Array.of(this.events);
    }, error => console.error(error));
  }
}
