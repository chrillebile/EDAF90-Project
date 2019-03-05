import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { CryptonatorCrypto } from './cryptonator-crypto';

const API_URL = "https://api.cryptonator.com/api/";

@Injectable({
  providedIn: 'root'
})
export class CryptonatorAPIService {
  constructor(private http: HttpClient) { }

  findOneFull(id: string): Observable<CryptonatorCrypto> {
    return this.http.get(API_URL + 'full/' + id)
      .pipe(map((item: any) => new CryptonatorCrypto(item.ticker)));
  }
}
