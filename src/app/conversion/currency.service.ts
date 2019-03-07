import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

const exchangeRatesAPI = "https://api.exchangeratesapi.io/";
const cryptonatorAPI = "https://api.cryptonator.com/api/";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class CurrencyService {
  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
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
