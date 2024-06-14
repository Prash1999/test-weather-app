import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CityService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getCities(): Observable<any> {
    return this.http.get(`${this.apiUrl}/cities`);
  }

  addCity(name: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/cities`, { name });
  }

  deleteCity(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/cities/${id}`);
  }
  
  fetchWeather(): Observable<any> {
    return this.http.post(`${this.apiUrl}/fetch-weather`, {});
  }

  changeInterval(interval: number): Observable<any>{
    return this.http.post(`${this.apiUrl}/interval`, {interval}, {observe: "response"});
  }
}