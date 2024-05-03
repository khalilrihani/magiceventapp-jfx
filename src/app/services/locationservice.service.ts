import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationserviceService {

  constructor(private http:HttpClient) { }



  //impotant khalil
fetchl(){
  return this.http.get('http://localhost:3000/locations/fetch')
}


//impotant khalil
addl(l:any){
  return this.http.post('http://localhost:3000/locations/add',l)
}



//impotant khalil
updatel(l:any){
  return this.http.put('http://localhost:3000/locations/update',l)
}

//impotant khalil
deletel(){
  return this.http.delete('http://localhost:3000/locations/remove')
}
}
