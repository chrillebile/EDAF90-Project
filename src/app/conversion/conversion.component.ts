import { map } from "rxjs/operators";
import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { CurrencyService } from "./currency.service";
import { AngularWaitBarrier } from "blocking-proxy/built/lib/angular_wait_barrier";
import { initDomAdapter } from "@angular/platform-browser/src/browser";

@Component({
  selector: "app-conversion",
  templateUrl: "./conversion.component.html",
  styleUrls: ["./conversion.component.css"]
})
export class ConversionComponent implements OnInit {
  crypto: any = [];

  rate1: any = 0;
  rate2: any = 0;

  input: any = 1;
  output: any = 0;

  constructor(public currencyService: CurrencyService) {}

  ngOnInit() {
    //this.getCurrencies();
    this.getCrypto();
  }
  /*
  getCurrencies() {
    this.currency = [];
    this.curr.getCurrencies().subscribe((data: {}) => {
      console.log(data);
      this.currency = data;
    });
  }*/
  getCrypto() {
    this.crypto = [];
    this.curr.getCryptos().subscribe((data: {}) => {
      let temp = data[Object.keys(data)[0]];
      console.log(temp.filter(coin => coin.statuses.length === 2));
      //this.crypto = temp.filter(coin => coin.statuses.includes('primary'));
      this.crypto = temp.filter(coin => coin.statuses.length === 2);
    });
  }
  getConversion1(event) {
    this.curr
      .getCrypto(event.target.selectedOptions["0"].value)
      .subscribe((data: {}) => {
        if (typeof data["ticker"] === "undefined") {
          this.rate1 = 0;
          alert(
            "could not find conversion for " +
              event.target.selectedOptions["0"].value
          );
          return;
        }
        this.rate1 = data["ticker"]["price"];
      });
  }
  getConversion2(event) {
    this.curr
      .getCrypto(event.target.selectedOptions["0"].value)
      .subscribe((data: {}) => {
        if (typeof data["ticker"] === "undefined") {
          this.rate2 = 0;
          alert(
            "could not find conversion for " +
              event.target.selectedOptions["0"].value
          );
          return;
        }
        this.rate2 = data["ticker"]["price"];
      });
  }
  convert(event) {
    if (this.rate1 === 0 || this.rate2 === 0) {
      alert("Both currencies must be selected!");
      return;
    }
    this.output = (this.input * this.rate1) / this.rate2;
  }
}
