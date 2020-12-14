import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Event } from "../model/event.model";

@Injectable()
export class EventService {
  private url = 'http://localhost:8086/ie/api';
  selectedEvent: Event;

  constructor(private http: HttpClient) {
    
  }

  getAll() {
    return this.http.get(this.url + "/event/");
  }

  aprove(event:Event) {
    return this.http.post<Event>(this.url + "/event/aprove", event).subscribe();

  }

  reject(event:Event) {
    return this.http.post<Event>(this.url + "/event/reject", event).subscribe();
  }

}
    








