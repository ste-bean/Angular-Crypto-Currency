import { Injectable } from '@angular/core';
import { Http} from 'angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  
  result:any;	

  constructor(private _http: Http) { }

  getPrices() {
  return this.http.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD")
  .map(result => this.result = result.json());
 
  }
}
