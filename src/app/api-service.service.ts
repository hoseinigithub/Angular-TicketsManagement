import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  CreateMovie(data: any) {
    let url = "http://localhost:5257/api/Movies/Create";
    return this.http.post(url, data, this.httpOptions);
  }
}
