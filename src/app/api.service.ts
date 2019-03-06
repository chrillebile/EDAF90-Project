import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
  
})
export class ApiService {
  private apiURL: string = 'https://api.cryptonator.com/api/ticker/btc-usd';
  private baseUrl : string = 'https://api.cryptonator.com/api/ticker/'
  private products = [];
  constructor(private httpClient: HttpClient) {}


  get_btc_usd(){
    this.httpClient.get(this.baseUrl + '/btc-usd').subscribe((res : any[])=>{
    console.log(res);
    this.products = res;
    });
}
}