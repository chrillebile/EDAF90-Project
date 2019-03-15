import { Component, OnInit, Input } from '@angular/core';
import { CryptonatorCrypto } from '../cryptonator-crypto';

@Component({
  selector: 'app-specific-information-crypto',
  templateUrl: './specific-information-crypto.component.html',
  styleUrls: ['./specific-information-crypto.component.css']
})
export class SpecificInformationCryptoComponent implements OnInit {
  @Input() crypto: CryptonatorCrypto;

  constructor() { }

  ngOnInit() {
  }

}
