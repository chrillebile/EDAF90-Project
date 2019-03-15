import { Injectable } from "@angular/core";
import {
  HttpClient
} from "@angular/common/http";
import { Observable} from "rxjs";
import { map} from "rxjs/operators";

const exchangeRatesAPI = "https://api.exchangeratesapi.io/";
const cryptonatorAPI = "https://api.cryptonator.com/api/";

@Injectable({
  providedIn: "root"
})
export class CurrencyService {
  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
  getCurrencies(): Observable<any> {
    return this.http
      .get(exchangeRatesAPI + "latest?base=USD")
      .pipe(map(this.extractData));
  }
  getCurrency(currencyCode): Observable<any> {
    return this.http
      .get(exchangeRatesAPI + "latest?base=USD")
      .pipe(map(this.extractData));
  }
  getCryptos(): Observable<any> {
    return this.http.get(cryptonatorAPI + "currencies").pipe(map(this.extractData));
  }
  getCrypto(cryptoCode): Observable<any> {
    return this.http
      .get(cryptonatorAPI + "ticker/" + cryptoCode + "-usd")
      .pipe(map(this.extractData));
  }
}
