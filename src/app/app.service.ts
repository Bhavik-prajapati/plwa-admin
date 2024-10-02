import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  isLoginPage:boolean=false;
  constructor() { }
}
