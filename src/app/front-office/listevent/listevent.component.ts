import { Component, OnInit } from '@angular/core';

import { EventService } from 'src/app/services/creationevenement.service';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-listevent',
  templateUrl: './listevent.component.html',
  styleUrls: ['./listevent.component.css']
})
export class ListeventComponent implements OnInit {
   events: any;




  constructor(
               private router:Router,
               private EventService: EventService
  ) { }
  ngOnInit() {
    this.EventService.getAllEvent().subscribe((event ) => {
      this.events = event;
      console.log(this.events);


    })
  }


}
