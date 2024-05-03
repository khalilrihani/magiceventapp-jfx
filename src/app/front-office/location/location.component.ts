import { Component, OnInit } from '@angular/core';
import { LocationserviceService } from 'src/app/services/locationservice.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private s:LocationserviceService) { }

  ngOnInit(): void {
  }


  
  addl(l:any){
    this.s.addl(l).subscribe(()=>{console.log('succes')})
  }
    

}
