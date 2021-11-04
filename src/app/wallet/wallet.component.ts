import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";

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

  constructor(
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
