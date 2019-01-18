import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class HttpService {

  private serverURL = 'http://localhost:8080';
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8');
    this.headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Access-Control-Allow-Headers', 'Authorization,DNT,X-Mx- ReqToken,Keep-Alive,User-Agent,' +
      'X-Requested-With,If-Modified-Since,content-type');
  }

  create <T>(item: T, apiURL: string): Observable<any> {
      return this.http.post(`${this.serverURL}/${apiURL}`, item, {headers: this.headers});
  }

  update <T>(id: string, item: T, apiURL: string): Observable<any>  {
      return this.http.post(`${this.serverURL}/${apiURL}/${id}`, item, {headers: this.headers});
  }

  getAll <T>(apiURL: string): Observable<any> {
    return this.http.get<T[]>(`${this.serverURL}/${apiURL}`);
  }

  getByNameAndPassword <T> (name: string, password: string, apiURL: string): Observable<any> {
    return this.http.get<T>(`${this.serverURL}/${apiURL}/${name}/${password}`);
  }

  delete(id: string, apiURL: string): Observable<any> {
      return this.http.delete(`${this.serverURL}/${apiURL}/${id}`);
  }

}
