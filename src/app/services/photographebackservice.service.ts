import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotographebackserviceService {

  constructor(private http:HttpClient) { }






  //impotant khalil
  fetchp(){
    return this.http.get('http://localhost:3000/photographes/fetch')
  }
  //impotant khalil
  fetchids(){
    return this.http.get('http://localhost:3000/photographes/fetchids')
  }
  
  //impotant khalil
  addp(p:any){
    return this.http.post('http://localhost:3000/photographes/add',p)
  }
  
  
  
  //impotant khalil
  updatep(p:any ,id:any){
    return this.http.put('http://localhost:3000/photographes/update/'+id,p)
  }
  
  //impotant khalil
  deletep( id:any){
    return this.http.delete('http://localhost:3000/photographes/remove/'+id)
  }
}
