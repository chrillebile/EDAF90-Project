import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngbd-table-basic',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
  })
  export class WelcomePageComponent {
    elements: any = [
      {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
      {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
      {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
    ];
    ngOnInit() {
    }
  
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