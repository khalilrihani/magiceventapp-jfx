import { Component, OnInit } from '@angular/core';
import { EspaceserviceService } from 'src/app/services/espaceservice.service';

@Component({
  selector: 'app-espace',
  templateUrl: './espace.component.html',
  styleUrls: ['./espace.component.css']
})
export class EspaceComponent implements OnInit {

  constructor(private s:EspaceserviceService) { }
  listespace:any;
  ngOnInit(): void {
    this.s.fetchespacee().subscribe(
      (d)=>{
        console.log(d)
        this.listespace=d
      },
      (err)=>{
        console.log(err)
      }
    )
   






  }



  url:any;
  //   onselectfile(event:any){}
  //  if (event.target.files[] ){
  //    var reader= new FileReader();
  //   reader.readAsDataURL(event.target.files[0]);
  //    reader.onload=(event:any)=>{
  //     this.url=event.target.result;
  //   }
  //  }
    
  
  add(d:any){
  this.s.addespace(d).subscribe(()=>{console.log('succes')})
}
  
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
  
//
}
