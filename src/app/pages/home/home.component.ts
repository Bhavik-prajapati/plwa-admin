import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {  
  userscount:number=0;
  propertiescount:number=0;
  usersdata:any=[];
  propertiesdata:any=[];

  constructor(private homeservice:HomeService){
    homeservice.getAllUsersList().subscribe((res:any)=>{
      this.userscount=res.length;
      this.usersdata=res;
      console.log(this.usersdata)
    },err=>console.log(err))

    homeservice.getAllPropertiesList().subscribe((res:any)=>{
      this.propertiescount=res.length;
      this.propertiesdata=res;
      console.log(this.propertiesdata)
    },err=>console.log(err))

  }
}
