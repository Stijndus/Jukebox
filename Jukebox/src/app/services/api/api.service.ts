import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly URL = 'http://127.0.0.1:8000/api'

  constructor(private http: HttpClient) { }

  getSongs(){
    return this.http.get<any[]>(`${this.URL}/songs`);
  }

  getSong(id: number){
    return this.http.get<any[]>(`${this.URL}/songs/${id}`);
  }
}
