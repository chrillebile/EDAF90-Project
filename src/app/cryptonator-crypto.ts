export class CryptonatorCrypto {
  base: string;
  change: number;
  markets: Object[];
  price: number;
  target: string;
  volume: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
