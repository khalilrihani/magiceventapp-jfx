import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Events} from "../models/event";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class EventService {

  private url = environment.serverURL;

  constructor(private http: HttpClient) {
  }

  getAllEvents(): Observable<Events[]> {
    return this.http.get<Events[]>(this.url + 'events');
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
