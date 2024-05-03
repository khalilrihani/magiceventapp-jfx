import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotographebackserviceService } from 'src/app/services/photographebackservice.service';

@Component({
  selector: 'app-photographeback',
  templateUrl: './photographeback.component.html',
  styleUrls: ['./photographeback.component.css']
})
export class PhotographebackComponent implements OnInit {
  constructor(private s:PhotographebackserviceService,private ac:ActivatedRoute) { }
  listsp:any;
   lists:any;
   idt:any;
   ngOnInit(): void {
 
 
 
     
  
 
 
     this.s.fetchp().subscribe(
       (p)=>{
         console.log(p)
         this.listsp=p
       },
       (err)=>{
         console.log(err)
       }
     )
 
 
     this.s.fetchids().subscribe(
       (p)=>{
         console.log(p)
         this.listsp=p
       },
       (err)=>{
         console.log(err)
       }
     )
 
     
      
     }  
 
 
  
 
   add(p:any){
     this.s.addp(p).subscribe(()=>{console.log('succes')})
   }
   
 
   
 
 
   update(p:any ){
     this.s.updatep(p,this.ac.snapshot.params['id']).subscribe(()=>{console.log('succes')})
   }
 
 
 
    delete(id:any){
  
     // this.idt=this.ac.snapshot.params['id']
     this.s.deletep(id).subscribe(()=>{console.log('succes')})
  }
}
