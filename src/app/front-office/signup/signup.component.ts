import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from "@angular/forms"
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signForm!: FormGroup;

  constructor(private formBuilder:FormBuilder , private http : HttpClient, private router:Router) { }

  ngOnInit(): void {

    this.signForm = this.formBuilder.group({
     //name:[''Validators.required],
     //lname:[''Validators.required],
     //email:[''Validators.required],
     //passs:[''Validators.required],
     //tlf:[''Validators.required],

    })




  }


  signup(){
this.http.post<any>("http://localhost:3000/signup",this.signForm.value)
.subscribe (res=>{
  alert("Successfull");
  this.signForm.reset();
  this.router.navigate(['login']);
},err=>{
alert("something went wrong")
  })

      }}

