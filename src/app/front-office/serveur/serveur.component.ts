import { Component, OnInit } from '@angular/core';
import { ServeurserviceService } from 'src/app/services/serveurservice.service';

@Component({
  selector: 'app-serveur',
  templateUrl: './serveur.component.html',
  styleUrls: ['./serveur.component.css']
})
export class ServeurComponent implements OnInit {

 
  constructor(private s:ServeurserviceService) { }

  ngOnInit(): void {
  }



  adds(s:any){
    this.s.adds(s).subscribe(()=>{console.log('succes')})
  }
    








  url:any;
  onSelect(event:any) {
    let fileType = event.target.files[0].type;
    if (fileType.match(/image\/*/)) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    } else {
      window.alert('Please select correct image format');
    }
  }
}