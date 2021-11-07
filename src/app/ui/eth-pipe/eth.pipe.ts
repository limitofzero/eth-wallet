import { Inject, Pipe, PipeTransform } from '@angular/core';
import BigNumber from "bignumber.js";
import { WEB3 } from "../../../web3/web3.token";
import Web3 from "web3";

@Pipe({
  name: 'eth'
})
export class EthPipe implements PipeTransform {
  constructor(
    @Inject(WEB3) private readonly web3: Web3,
  ) {
  }

  transform(value: string | null): string {
    return value ? this.web3.utils.fromWei(value) : '';
  }

}
