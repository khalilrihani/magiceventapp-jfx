import { Component, OnInit } from '@angular/core';
import {List_userService} from "../../../services/list_user/list_user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listanimateur',
  templateUrl: './listanimateur.component.html',
  styleUrls: ['./listanimateur.component.css']
})
export class ListanimateurComponent implements OnInit {
  espaces: any;


  constructor( private listuserserve : List_userService ,
               private router:Router) { }

  ngOnInit(): void {
    this.listuserserve.getlist_animateurs().subscribe((espace : any ) => {
      this.espaces = espace;
      console.log(this.espaces);

    });
  }

  selectEspaces(id: number) {
    this.router.navigate(['/animateur', id]).then();
  }
}

