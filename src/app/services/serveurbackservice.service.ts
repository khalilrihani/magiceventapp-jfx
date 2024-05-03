import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServeurbackserviceService {

 
  constructor(private http:HttpClient) { }






//impotant khalil
fetchs(){
  return this.http.get('http://localhost:3000/serveurs/fetch')
}
//impotant khalil
fetchids(){
  return this.http.get('http://localhost:3000/serveurs/fetchids',)
}

//impotant khalil
adds(r:any){
  return this.http.post('http://localhost:3000/serveurs/add',r)
}



//impotant khalil
updates(r:any ,id:any){
  return this.http.put('http://localhost:3000/serveurs/update/'+id,r)
}

//impotant khalil
deletes( id:any){
  return this.http.delete('http://localhost:3000/serveurs/remove/'+id)
}
}
