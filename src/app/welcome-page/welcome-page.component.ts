import { Component, OnInit, QueryList, ViewChildren, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CurrencyService } from 'src/app/conversion/currency.service';
import { map, catchError, tap } from 'rxjs/operators';
import {DecimalPipe} from '@angular/common';
import {Observable} from 'rxjs';
import { MDBBootstrapModule, IconsModule,WavesModule,TableModule } from 'angular-bootstrap-md';
import { BrowserModule } from '@angular/platform-browser';
import { Browser } from 'protractor';
import { MdbTableSortDirective } from 'src/app/mdb-table-sort.directive';


@NgModule({

  imports: [
    BrowserModule,
    IconsModule,
    MDBBootstrapModule.forRoot(),
  ],
})
@Component({
  
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
  //selector: 'ngbd-table-complete',
  })
  export class WelcomePageComponent implements OnInit{
    headElements = ['#', 'Currency', 'Value', 'Change(24h)', 'Favorite'];
    crypto: any = [];
    crypte: any = [];
    private baseUrl = 'https://api.cryptonator.com/api/ticker'
    private products = [];
    ngOnInit() {
      for (let i = 1; i <= 31; i++) {
        this.crypte.push({ '#': i, Currency: 'User ' + i, Value: 'Name ' + i, 'Change(24h)': 'Handle ' + i });
      }
      this.getCrypto();
      
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