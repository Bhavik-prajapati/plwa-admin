import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';  

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }
  

  private apiUrl: string = environment.apiUrl;

  private createAuthorizationHeader(): HttpHeaders {
    const username = 'admin';
    const password = 'admin';
    const token = btoa(`${username}:${password}`);  // Base64 encoding of username:password

    return new HttpHeaders({
      'Authorization': `Basic ${token}`,
    });
  }

  getAllUsersList() {
    const headers = this.createAuthorizationHeader();
    return this.http.get(`${this.apiUrl}/users`, { headers });
  }

  getAllPropertiesList() {
    const headers = this.createAuthorizationHeader();
    return this.http.get(`${this.apiUrl}/properties`, { headers });
  }

}
