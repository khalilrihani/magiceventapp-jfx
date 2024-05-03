import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServeurserviceService {

  constructor(private http:HttpClient) { }








  //impotant khalil
  fetchs(){
    return this.http.get('http://localhost:3000/serveurs/fetch')
  }


  //impotant khalil
  adds(s:any){
    return this.http.post('http://localhost:3000/events/addrole',s)
  }



  //impotant khalil
  updates(s:any){
    return this.http.put('http://localhost:3000/serveurs/update',s)
  }

  //impotant khalil
  deletes(){
    return this.http.delete('http://localhost:3000/serveurs/remove')
  }
}
