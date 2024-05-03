import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {DeviModelServer, serverResponse} from "../../models/devis/devi";


@Injectable({
  providedIn: 'root'
})
export class DeviService {
  private url = environment.serverURL;

  constructor(private http: HttpClient) {
  }

  getAllDevis(limitOfResults=100): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.url + 'devis', {
      params: {
        limit: limitOfResults.toString()
      }
    });
  }

  getSingleDevi(id: Number): Observable<DeviModelServer> {
    return this.http.get<DeviModelServer>(this.url + 'devis/' + id);
  }


}
