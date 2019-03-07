import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  // selector: 'ngbd-table-basic',
   templateUrl: './welcome-page.component.html',
  // styleUrls: ['./welcome-page.component.css'],
  })
  export class WelcomePageComponent {
    // elements: any = [
    //   {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    //   {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    //   {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
    // ];

    private baseUrl : string = 'https://api.cryptonator.com/api/ticker'
    private products = [];
    ngOnInit() {
    }
    get_btc_usd(){
      this.httpClient.get(this.baseUrl).subscribe((res : any[])=>{
      console.log(res);
      this.products = res;
      });
  }
    constructor(private httpClient: HttpClient){}
  
  }



/*
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/