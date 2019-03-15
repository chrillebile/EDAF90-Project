import { Component, OnInit, NgModule, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyService } from 'src/app/conversion/currency.service';
import { MdbTableService, MDBBootstrapModule, IconsModule} from 'angular-bootstrap-md';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({

  imports: [
    BrowserModule,
    IconsModule,
    MDBBootstrapModule.forRoot(),
  ],
})
@Component({

  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  })
  export class FavoritesComponent implements OnInit {
    name = 'Angular';
    headElements = ['#', 'Currency', 'Value', 'Change(24h)'];
    crypto: any = [];
    private baseUrl = 'https://api.cryptonator.com/api/ticker';
    private products = [];
    searchText = '';
  previous: string;
    ngOnInit() {

    this.getCrypto();
    this.tableService.setDataSource(this.crypto);
    this.crypto = this.tableService.getDataSource();
    this.previous = this.tableService.getDataSource();
    }

  getCrypto() {
    this.crypto = [];
    let temp;

    for (const key in localStorage) {
      if (localStorage.getItem(key) == 'true') {
      this.getCryptoProps(key);
      }
    }
  }

  getCryptoProps(cryptoCode) {
    this.httpClient.get('https://api.cryptonator.com/api/' + 'ticker/' + cryptoCode.toLowerCase() +  '-usd').subscribe(res => {
     if (res['ticker']) {
     this.crypto.push(res['ticker']);
     }
    });
  }

    constructor(public curr: CurrencyService, public httpClient: HttpClient, private tableService: MdbTableService) {}

    @HostListener('input') oninput() {
      this.searchItems();
    }
    searchItems() {
      const prev = this.tableService.getDataSource();

      if (!this.searchText) {
        this.tableService.setDataSource(this.previous);
        this.crypto = this.tableService.getDataSource();
      }

      if (this.searchText) {
        this.crypto = this.tableService.searchLocalDataBy(this.searchText.toLowerCase());
        this.tableService.setDataSource(prev);
      }

    }
}
