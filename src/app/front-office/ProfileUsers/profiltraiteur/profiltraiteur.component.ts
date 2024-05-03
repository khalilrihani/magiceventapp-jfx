import { Component, OnInit } from '@angular/core';
import {List_userService} from "../../../services/list_user/list_user";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {map} from "rxjs";

@Component({
  selector: 'app-profiltraiteur',
  templateUrl: './profiltraiteur.component.html',
  styleUrls: ['./profiltraiteur.component.css']
})
export class ProfiltraiteurComponent implements OnInit {
  espace: any;
  espaces: any;
  private id: any;

  constructor( private listuserserve : List_userService ,
               private route: ActivatedRoute ,
               private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map((param: ParamMap) => {

        // @ts-ignore
        return param.params.id;
      })
    ).subscribe(prodId => {
      this.id = prodId;
      this.listuserserve.gettraiteurById(this.id).subscribe((prod) => {
        this.espace = prod ;
        this.affichProdL();

      });
    });


  }


  affichProdL(): void{
    this.listuserserve.getlist_traiteurs().subscribe((prods ) => {
      this.espaces = prods;
    });
  }


  selectEspaces(id: number) {
    this.router.navigate(['/traiteur', id]).then();
  }


  reservation(id: number) {
    this.router.navigate(['/espace', id]).then();
  }


  devi(id: number) {
    this.router.navigate(['/espace', id]).then();
  }

}
