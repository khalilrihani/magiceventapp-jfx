


import { Component, OnInit } from '@angular/core';
import { List_userService } from '../../services/list_user/list_user';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   animateurs: any;
  private traiteurs: any;
  private espaces: any;




  constructor( private listuserserve : List_userService ,
              private router:Router
  ) { }


  getAnimateur(){
    this.listuserserve.getlist_animateurs().subscribe((animate : any ) => {
      this.animateurs = animate;
      console.log(this.animateurs);

    });
  }
  getTraiteur(){
    this.listuserserve.getlist_traiteurs().subscribe((traiteurs : any ) => {
      this.traiteurs = traiteurs;
      console.log(this.traiteurs);

    });
  }
  getEspace(){
    this.listuserserve.getlist_espaces().subscribe((espace : any ) => {
      this.espaces = espace;
      console.log(this.espaces);

    });
  }


  ngOnInit() {
this.getAnimateur() ;
this.getTraiteur();
this.getEspace() ;


  }









  selectProduct(id: Number) {
    this.listuserserve.getanimateurById(id).subscribe((animate : any ) => {
      this.animateurs = animate;
      console.log(this.animateurs);

    });
  }

  AddProduct(ID_PRODUIT: any) {

  }
}
