import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EspaceserviceService {

  constructor(private http:HttpClient) { }



  //impotant khalil
fetchespacee(){
  return this.http.get('http://localhost:3000/espaces/fetchtype',)
}



//impotant khalil
fetch(){
  return this.http.get('http://localhost:3000/espaces/fetch')
}
//impotant khalil
fetchid(){
  return this.http.get('http://localhost:3000/espaces/fetchid',)
}

//impotant khalil
addespace(d:any){
  return this.http.post('http://localhost:3000/espaces/add',d)
}



//impotant khalil
updateespace(d:any){
  return this.http.put('http://localhost:3000/espaces/update',d)
}

//impotant khalil
deleteespace(d:any){
  return this.http.delete('http://localhost:3000/espaces/remove',d)
}
}
