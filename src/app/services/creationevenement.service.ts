import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class EventService {

  private url = environment.serverURL;

  constructor(private http: HttpClient) {
  }

  getAllEvent(): Observable<Event[]> {
    return this.http.get<Event[]>(this.url + 'eventcreate');
  }

  postEvent( data : any){
    return this.http.post<any>("http://localhost:3000/eventList/",data);
  }
  getEvent(){
    return this.http.get<any>("http://localhost:3000/eventList/");

  }
  putEvent(data:any ,id : number){
    return this.http.put<any>("http://localhost:3000/eventList/"+id,data);

  }
  deleteEvent(id:number){
    return this.http.delete<any>("http://localhost:3000/eventList/"+id);

  }
}
