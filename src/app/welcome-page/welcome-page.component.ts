import { Component, OnInit, QueryList, ViewChildren, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyService } from 'src/app/conversion/currency.service';
import { map, catchError, tap } from 'rxjs/operators';
import {DecimalPipe} from '@angular/common';
import {Observable} from 'rxjs';
import { WavesModule, TableModule, IconsModule } from 'angular-bootstrap-md';

@NgModule({

  imports: [
    IconsModule,
  ],
})
@Component({
  
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
  //selector: 'ngbd-table-complete',
  })
  export class WelcomePageComponent implements OnInit{
    headElements = ['#', 'Currency', 'Value', 'Change(24h)'];
    crypto: any = [];
    private baseUrl = 'https://api.cryptonator.com/api/ticker'
    private products = [];
    ngOnInit() {
      for (let i = 1; i <= 15; i++) {
        this.crypto.push({ id: i, first: 'User ' + i, last: 'Name ' + i, handle: 'Handle ' + i });
      }
    }
    private extractData(res: Response) {
      let body = res;
      return body || { };
      }
  
  getCrypto() {
    this.crypto = [];
    this.curr.getCryptos().subscribe((data: {}) => {
     let temp = data[Object.keys(data)[0]];
      temp = temp.filter(coin => coin.statuses.length === 2);
      temp.map(coin => {
        this.getCryptoProps(coin.code);
      }); 
    });
  }
  
  getCryptoProps(cryptoCode){
    this.httpClient.get('https://api.cryptonator.com/api/' + 'ticker/' + cryptoCode.toLowerCase() +  '-usd').subscribe(res => {
    if(res.ticker){
    this.crypto.push(res.ticker);
    console.log(res.ticker);
    }
    });  
  }
  
    constructor(public curr: CurrencyService, public httpClient: HttpClient){}
  

} 
