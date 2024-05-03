import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";

import {Observable} from "rxjs";
import {reservation} from "../../models/reservation";

@Injectable({
  providedIn: 'root'
})

export class ReservationService {

  private url = environment.serverURL;

  constructor(private http: HttpClient) {
  }

  postResEspace( data : any){
    return this.http.post(this.url+"reservation/espace/add",data);
  }



}
