import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Event, EventsService } from '../events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
    
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  private events: Observable<any>;
  
  constructor(private _formBuilder: FormBuilder, private eventService: EventsService) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.events = this.eventService.events;

    this.eventService.getEvent1();
  }
}
