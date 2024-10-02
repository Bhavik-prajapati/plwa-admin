import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { AppService } from './app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, FooterComponent, HomeComponent, LoginComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})  
export class AppComponent {
  islogin:boolean=false;

  constructor(){
    const storedValue = localStorage.getItem("adminlogin");
    this.islogin = storedValue ? JSON.parse(storedValue) : false;
  }

}
