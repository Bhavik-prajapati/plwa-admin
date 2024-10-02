import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 
    { path: 'login', component: LoginComponent },
    {   path:"",
        component:LayoutComponent,
        children:[
            { path: 'home', component: HomeComponent },
        ]
    }
];
