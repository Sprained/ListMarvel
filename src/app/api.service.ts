import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  URL_API = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey';
  API_KEY = 'dc1305a05d9dc17da701823da19c16e4';
  HASG_KEY = '988e5d48a5fedf3e87c942317a68b013';

  constructor(private httpClient: HttpClient) { }

  getMarvel(){
    return this.httpClient.get(`${this.URL_API}=${this.API_KEY}&hash=${this.HASG_KEY}`);
  }
}
