import { Component, OnInit } from '@angular/core';
import {List_userService} from "../../../services/list_user/list_user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listserveur',
  templateUrl: './listserveur.component.html',
  styleUrls: ['./listserveur.component.css']
})
export class ListserveurComponent implements OnInit {
  espaces: any;


  constructor( private listuserserve : List_userService ,
               private router:Router) { }

  ngOnInit(): void {
    this.listuserserve.getlist_serveurs().subscribe((espace : any ) => {
      this.espaces = espace;
      console.log(this.espaces);

    });
  }

  selectEspaces(id: number) {
    this.router.navigate(['/serveur', id]).then();
  }
}


