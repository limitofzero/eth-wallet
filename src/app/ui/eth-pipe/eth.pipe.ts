import { Pipe, PipeTransform } from '@angular/core';
import BigNumber from "bignumber.js";

@Pipe({
  name: 'eth'
})
export class EthPipe implements PipeTransform {

  transform(value: string | null): string {
    return value ? new BigNumber(value).dividedBy(1e18).toString() : '';
  }

}
