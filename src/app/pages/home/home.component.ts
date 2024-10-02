import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userscount:number=0;
  constructor(private homeservice:HomeService){
    homeservice.getalluserslist().subscribe((res:any)=>{
      this.userscount=res.length;
    },err=>console.log(err))
  }
}
