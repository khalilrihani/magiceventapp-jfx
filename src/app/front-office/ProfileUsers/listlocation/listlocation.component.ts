import { Component, OnInit } from '@angular/core';
import {List_userService} from "../../../services/list_user/list_user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listlocation',
  templateUrl: './listlocation.component.html',
  styleUrls: ['./listlocation.component.css']
})
export class ListlocationComponent implements OnInit {
  espaces: any;


  constructor( private listuserserve : List_userService ,
               private router:Router) { }

  ngOnInit(): void {
    this.listuserserve.getlist_locations().subscribe((espace : any ) => {
      this.espaces = espace;
      console.log(this.espaces);

    });
  }

  selectEspaces(id: number) {
    this.router.navigate(['/location', id]).then();
  }
}


