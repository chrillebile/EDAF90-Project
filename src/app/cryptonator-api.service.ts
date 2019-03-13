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

  /**
   * Retrieve full information about a specific.
   * @param id Id of the cryptocurrency, e.g. btc
   */
  findOneFull(id: string): Observable<CryptonatorCrypto> {
    return this.http.get(API_URL + 'full/' + id + '-usd')
      .pipe(map((item: any) => new CryptonatorCrypto(item.ticker, item.timestamp)));
  }
}
