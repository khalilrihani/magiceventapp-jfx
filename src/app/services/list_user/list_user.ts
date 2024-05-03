import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";

import {Observable} from "rxjs";
import {Events} from "../../models/event";
import {Animateur} from "../../models/service/animateur";

@Injectable({
  providedIn: 'root'
})

export class List_userService {

  private url = environment.serverURL;

  constructor(private http: HttpClient) {
  }


  getlist_animateurs(): Observable<Animateur[]> {
    return this.http.get<Animateur[]>(this.url + 'animateurs')
  }
  getanimateurById(id: any): Observable<Animateur>{
    return this.http.get<Animateur>(this.url + 'animateurs/'+ id)
  }

  getlist_espaces(){
    return this.http.get(this.url +'espaces')
  }
  getespaceById(id: Number){
    return this.http.get(this.url +'espaces/'+ id)
  }

  getlist_locations(){
    return this.http.get(this.url +'locations')
  }
  getlocationById(id: Number){
    return this.http.get(this.url +'locations/'+ id)
  }

  getlist_photographes(){
    return this.http.get(this.url +'photographes')
  }
  getphotographeById(id: Number){
    return this.http.get(this.url +'photographes/'+ id)
  }
  getlist_serveurs(){
    return this.http.get(this.url +'serveurs')
  }
  getserveurById(id: Number) {
    return this.http.get(this.url + 'serveurs/'+ id)
  }
  getlist_traiteurs(){
    return this.http.get(this.url +'traiteurs')
  }
  gettraiteurById(id: Number){
    return this.http.get(this.url +'traiteurs/'+ id)
  }



}
