import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment'

const HTTPHEADER = new HttpHeaders({
  'Authorization': environment.apiToken
})

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getMovies(term: string) {
    const params = new HttpParams().set('query', term);
    return this.httpClient.get(environment.apiUrl + 'search/movie', { headers: HTTPHEADER, params });
  }
}
