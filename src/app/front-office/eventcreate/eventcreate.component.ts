import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { createvent } from 'src/app/models/devis/createvent';
//import { CreationevenementService } from 'src/app/services/creationevenement.service';

@Component({
  selector: 'app-eventcreate',
  templateUrl: './eventcreate.component.html',
  styleUrls: ['./eventcreate.component.css']
})
export class EventcreateComponent implements OnInit {
  // createvent: createvent[];
  // product: Product=new Product();

  createvent: createvent=new createvent();

  header :string;
  id: number;

  // rForm: FormGroup;
  // post:any;                     // A property for our submitted form
  // description:string = '';
  // name:string = '';
  // titleAlert:string = 'This field is required';
  constructor(private route: ActivatedRoute,
              //private CreationevenementService:CreationevenementService
               ) {
    // private fb: FormBuilder
    // this.rForm = fb.group({
    //   'name': [null, Validators.required],
    //   'description': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
    //   'validate' : ''
    // });



  }

  ngOnInit(): void {
    // this.id=+this.route.snapshot.paramMap.get(id);
    // this.header = this.id ===0? 'createvent'

// this.createvent=this.CreationevenementService.onGet();

    // this.rForm.get('validate').valueChanges.subscribe(
    //   (validate) => {
    //     if (validate == '1') {
    //       this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
    //       this.titleAlert = "You need to specify at least 3 characters";
    //     } else {
    //       this.rForm.get('name').setValidators(Validators.required);
    //     }
    //     this.rForm.get('name').updateValueAndValidity();
    //   }
    //)
  }




  // addPost(post) {
  //   this.description = post.description;
  //   this.name = post.name;
  // }
  onSubmit(form: NgForm){
    console.log(form.value);
  //  let createvent:createvent ={
    // name : form.value.name,
    // phone : number;
    // email : String;
    // typeevent : String;
    // descripition : String;
    // nbr_invit: number;
    // date_event : string;
    // id_user:string;
    // creates_at: number;
  //  }
  }

}
