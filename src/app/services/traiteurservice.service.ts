import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TraiteurserviceService {

  constructor(private http:HttpClient) { }


//impotant khalil
fetcht(){
  return this.http.get('http://localhost:3000/traiteurs/fetch')
}


//impotant khalil
addt(t:any){
  return this.http.post('http://localhost:3000/traiteurs/add',t)
}



//impotant khalil
updatet(t:any){
  return this.http.put('http://localhost:3000/traiteurs/update',t)
}

//impotant khalil
deletet(){
  return this.http.delete('http://localhost:3000/traiteurs/remove')
}
}
