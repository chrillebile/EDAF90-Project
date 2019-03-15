import { Component, OnInit } from '@angular/core';
import { CryptonatorAPIService } from '../cryptonator-api.service';
import { ActivatedRoute } from '@angular/router';
import { CryptonatorCrypto } from '../cryptonator-crypto';

@Component({
  selector: 'app-specific-information',
  templateUrl: './specific-information.component.html',
  styleUrls: ['./specific-information.component.css']
})
export class SpecificInformationComponent implements OnInit {
  private id: string;
  private specificCrypto: CryptonatorCrypto;

  constructor(
    private cryptonatorAPIService: CryptonatorAPIService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.cryptonatorAPIService.findOneFull(this.id).subscribe((crypto: CryptonatorCrypto) => {
      this.specificCrypto = crypto;
      console.log(this.specificCrypto);
    });
  }
}
