import { Component, OnInit } from '@angular/core';
import { reservation } from 'src/app/models/reservation';
import { NgForm } from '@angular/forms';
import {map} from "rxjs";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {List_userService} from "../../../services/list_user/list_user";
import {ReservationService} from "../../../services/devis/ReservationService";

@Component({
  selector: 'app-reservationespace',
  templateUrl: './reservationespace.component.html',
  styleUrls: ['./reservationespace.component.css']
})
export class ReservationespaceComponent implements OnInit {
  reservation: reservation = new reservation();

  x : number ;
  private id_user: any;

  constructor(private listuserserve : List_userService ,
              private route: ActivatedRoute ,
              private router:Router,
              private reservationservice : ReservationService) { }


  ngOnInit(): void {
    this.route.paramMap.pipe(
      map((param: ParamMap) => {

        // @ts-ignore
        return param.params.id;
      })
    ).subscribe(Id => {
      this.id_user = Id;
    });



  }


  onSubmit(f: NgForm){

    console.log("ON ADD")

this.reservation.id_espace = this.id_user ;
      this.reservationservice.postResEspace(this.reservation).subscribe(()=>{console.log('succes')});




    console.log("reservation espace " + this.reservation + " id .."+ this.id_user)
  }


}
