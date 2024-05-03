import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-signupbusiness-user',
  templateUrl: './signupbusiness-user.component.html',
  styleUrls: ['./signupbusiness-user.component.css']
})
export class SignupbusinessUserComponent implements OnInit {

  public signForm!: FormGroup;
  constructor(private formBuilder:FormBuilder , private http : HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signForm = this.formBuilder.group({
      name:[''],
      lname:[''],
      email:[''],
      passs:[''],
      cin:[''],
      tlf:[''],
      bio:[''],
      role:[''],
    })


  }

  signup(){
this.http.post<any>("http://localhost:3000/signupBusUsers",this.signForm.value)
.subscribe (res=>{
  alert("Successfull");
  this.signForm.reset();
  this.router.navigate(['login']);
},err=>{
alert("something went wrong")
  })

      }}
