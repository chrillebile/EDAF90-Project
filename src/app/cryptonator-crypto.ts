export class CryptonatorCrypto {
  base: string;
  change: number;
  markets: Object[];
  price: number;
  target: string;
  volume: number;
  timestamp: number;

  constructor(values: Object = {}, time: number) {
    Object.assign(this, values);
    this.timestamp = time;
  }
}
