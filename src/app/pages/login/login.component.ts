import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  username:string='';
  password:string='';
  router=inject(Router);
  appservice=inject(AppService);

  login(){
    if(this.username==='admin' && this.password==='admin'){
      localStorage.setItem("adminlogin",JSON.stringify(true));
      this.router.navigateByUrl('home');
    }else{
      alert('password is wrong');
    }
  }
}
