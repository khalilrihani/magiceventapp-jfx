import { Component, OnInit } from '@angular/core';
import { AnimateurserviceService } from 'src/app/services/animateurservice.service';

@Component({
  selector: 'app-animateur',
  templateUrl: './animateur.component.html',
  styleUrls: ['./animateur.component.css']
})
export class AnimateurComponent implements OnInit {

  constructor( private s:AnimateurserviceService) { }

  ngOnInit(): void {
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


 
adda(a:any){
  this.s.adda(a).subscribe(()=>{console.log('succes')})
}


}
