import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServeurbackserviceService } from 'src/app/services/serveurbackservice.service';

@Component({
  selector: 'app-serveurback',
  templateUrl: './serveurback.component.html',
  styleUrls: ['./serveurback.component.css']
})
export class ServeurbackComponent implements OnInit {

  constructor(private s:ServeurbackserviceService,private ac:ActivatedRoute) { }
 listss:any;
  lists:any;
  idt:any;
  ngOnInit(): void {



    
 


    this.s.fetchs().subscribe(
      (r)=>{
        console.log(r)
        this.listss=r
      },
      (err)=>{
        console.log(err)
      }
    )


    this.s.fetchids().subscribe(
      (r)=>{
        console.log(r)
        this.lists=r
      },
      (err)=>{
        console.log(err)
      }
    )

    
     
    }  


 

  add(r:any){
    this.s.adds(r).subscribe(()=>{console.log('succes')})
  }
  

  


  update(r:any ){
    this.s.updates(r,this.ac.snapshot.params['id']).subscribe(()=>{console.log('succes')})
  }



   delete(id:any){
 
    // this.idt=this.ac.snapshot.params['id']
    this.s.deletes(id).subscribe(()=>{console.log('succes')})
 }
}
