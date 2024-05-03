import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { contact } from 'src/app/models/contact';

import '../../../assets/smtp.js';

declare let Email: any;


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: contact=new contact();



  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(f: NgForm) {

    Email.send({
      Host : 'smtp.elasticemail.com',
    Username : 'chiheb.menjli@esprit.tn',
    Password : 'C1A848A924139DC62BE30A89D22BFA268FE6',
    To : 'chiheb.menjli@esprit.tn',
    From : 'chiheb.menjli@esprit.tn',
      Subject : this.contact.subject,
      Body : `
<i>This is sent as a feedback from my resume page.</i> <br/> <b>Name: </b>${this.contact.name} <br /> <b>email: </b>${this.contact.email}<br /> <b>Subject: </b>${this.contact.subject}<br /> <b>Message:</b> <br /> ${this.contact.message} <br><br> <b>~End of Message.~</b> `
  }).then( (message: any) => {alert(message); f.resetForm(); } );

  }





}
