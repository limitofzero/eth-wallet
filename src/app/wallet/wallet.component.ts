import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { map, switchMap } from "rxjs/operators";
import Web3 from "web3";
import { WEB3 } from "../../web3/web3.token";

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css'],
  host: {
    'class': 'w-100',
  }
})
export class WalletComponent implements OnInit {
  public readonly address = this.route.params.pipe(map(({ address }) => address as string));
  public readonly balance = this.address.pipe(switchMap(asset => this.web3.eth.getBalance(asset)));

  constructor(
    @Inject(WEB3) private readonly web3: Web3,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
}
