import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotographeserviceService {

  constructor(private http:HttpClient) { }



  
//impotant khalil
fetchs(){
  return this.http.get('http://localhost:3000/photographes/fetch')
}


//impotant khalil
addp(p:any){
  return this.http.post('http://localhost:3000/photographes/add',p)
}



//impotant khalil
updatep(p:any){
  return this.http.put('http://localhost:3000/photographes/update',p)
}

//impotant khalil
deletep(id:any){
  return this.http.delete('http://localhost:3000/photographes/remove/'+id)
}
}
