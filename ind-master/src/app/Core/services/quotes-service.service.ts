import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class QuotesService {
  private apiUrl = environment.quotes;

  constructor(private http: HttpClient) { }

  getQuotes(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
