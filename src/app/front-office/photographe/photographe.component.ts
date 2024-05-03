import { Component, OnInit } from '@angular/core';
import { PhotographeserviceService } from 'src/app/services/photographeservice.service';

@Component({
  selector: 'app-photographe',
  templateUrl: './photographe.component.html',
  styleUrls: ['./photographe.component.css']
})
export class PhotographeComponent implements OnInit {

  constructor(private s:PhotographeserviceService) { }

  ngOnInit(): void {
  }

  addp(p:any){
    this.s.addp(p).subscribe(()=>{console.log('succes')})
  }

}
