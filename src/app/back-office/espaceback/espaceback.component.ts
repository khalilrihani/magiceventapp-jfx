import { Component, OnInit } from '@angular/core';
import { EsapcebackserviceService } from 'src/app/services/esapcebackservice.service';

@Component({
  selector: 'app-espaceback',
  templateUrl: './espaceback.component.html',
  styleUrls: ['./espaceback.component.css']
})
export class EspacebackComponent implements OnInit {

  constructor(private s:EsapcebackserviceService) { }
  listespace:any;
  liste:any;
  ngOnInit(): void {
 

  this.s.fetchespacee().subscribe(
    (d)=>{
      console.log(d)
      this.listespace=d
    },
    (err)=>{
      console.log(err)
    }
  )


  this.s.fetchid().subscribe(
    (e)=>{
      console.log(e)
      this.liste=e
    },
    (err)=>{
      console.log(err)
    }
  )

}
 

  add(d:any){
    this.s.addespace(d).subscribe(()=>{console.log('succes')})
  }
  update(d:any){
    this.s.updateespace(d).subscribe(()=>{console.log('succes')})
  }

  deletes(d:any){
    this.s.deleteespace(d).subscribe(()=>{console.log('succes')})
  }
}
//khalil