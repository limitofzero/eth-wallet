import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { map, switchMap } from "rxjs/operators";
import { WEB3 } from "../../../web3/web3.token";
import Web3 from "web3";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BalanceComponent {
  public readonly address = this.route.params.pipe(map(({ address }) => address as string));
  public readonly balance = this.address.pipe(switchMap(asset => this.web3.eth.getBalance(asset)));

  constructor(
    @Inject(WEB3) private readonly web3: Web3,
    private readonly route: ActivatedRoute
  ) { }

}
