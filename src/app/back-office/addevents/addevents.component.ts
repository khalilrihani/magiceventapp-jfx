import { EventService } from 'src/app/services/event.service';

import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-addevents',
  templateUrl: './addevents.component.html',
  styleUrls: ['./addevents.component.css']
})
export class AddeventsComponent implements OnInit {

  EventForm !: FormGroup;
  actionBtn: String = "save"
  constructor(private FormBuilder: FormBuilder, private api: EventService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<AddeventsComponent>) { }

  ngOnInit(): void {
    this.EventForm = this.FormBuilder.group({
      name: ['', Validators.required],
      id: ['', Validators.required],
      note: ['', Validators.required],
      asset: ['', Validators.required],
      date: ['', Validators.required],
      picture: ['', Validators.required],
      descripition: ['', Validators.required]
    });
    if (this.editData) {
      this.actionBtn = "Update";
      this.EventForm.controls['name'].setValue(this.editData.name);
      this.EventForm.controls['id'].setValue(this.editData.id);
      this.EventForm.controls['asset'].setValue(this.editData.asset);
      this.EventForm.controls['picture'].setValue(this.editData.picture);
      this.EventForm.controls['note'].setValue(this.editData.note);
      this.EventForm.controls['date'].setValue(this.editData.date);
      this.EventForm.controls['descripition'].setValue(this.editData.descripition);


    }
  }

 


  addEvent() {
    if(!this.editData) {
      if (this.EventForm.valid) {
        this.api.postEvent(this.EventForm.value).subscribe({
          next: (res) => {
            alert("Event added successfully")
            this.EventForm.reset();
            this.dialogRef.close('save');
          },
          error:()=> {
            alert("Error while adding the event")

          }
        })
      }
    }else {
    
      this.updateEvent()
    }

  }
  updateEvent() {
    this.api.putEvent(this.EventForm.value,this.editData.id).subscribe({
      next :(res)=>{
        alert("Event update successfuly");
        this.EventForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>{
        alert("Error while updating the record!!");
      }
    })
  }
  
}
