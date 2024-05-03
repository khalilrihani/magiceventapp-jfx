import { Component, OnInit } from '@angular/core';
import {List_userService} from "../../../services/list_user/list_user";
import {map} from "rxjs";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-profilespace',
  templateUrl: './profilespace.component.html',
  styleUrls: ['./profilespace.component.css']
})
export class ProfilespaceComponent implements OnInit {
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
      this.listuserserve.getespaceById(this.id).subscribe((prod) => {
        this.espace = prod ;
        this.affichProdL();

      });
    });


  }


  affichProdL(): void{
    this.listuserserve.getlist_espaces().subscribe((prods ) => {
      this.espaces = prods;
    });
  }


  selectEspaces(id: number) {
    this.router.navigate(['/espace', id]).then();
  }


  reservation(id: number) {
    this.router.navigate(['/reservationespace', id]).then();
  }


  devi(id: number) {
    this.router.navigate(['/espace', id]).then();
  }

}
