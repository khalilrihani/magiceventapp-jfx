import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimateurserviceService {

  constructor(private http:HttpClient) { }





  fetcha(){
    return this.http.get('http://localhost:3000/animateurs/fetch')
  }
  
  
  //impotant khalil
  adda(a:any){
    return this.http.post('http://localhost:3000/animateurs/add',a)
  }
  
  
  
  //impotant khalil
  updatea(a:any){
    return this.http.put('http://localhost:3000/animateurs/update',a)
  }
  
  //impotant khalil
  deletea(){
    return this.http.delete('http://localhost:3000/animateurs/remove')
  }
}
