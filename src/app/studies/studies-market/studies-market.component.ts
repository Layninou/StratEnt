import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'studies-market',
  templateUrl: './studies-market.component.html',
  styleUrls: ['./studies-market.component.css']
})
export class StudiesMarketComponent implements OnInit, OnChanges {

  @Input() game: any;
  @Input() company: any;
  @Input() periode: number;

  allTeams: any[];
  allProducts: any[];
  markets: any[];

  constructor() {
  }

  ngOnInit() {
    this.allTeams = [];
    this.allProducts = [];
    Object.keys(this.game.teams).map( (team) => this.allTeams.push(this.game.teams[team]));
    Object.keys(this.game.allProduct).map( (product) => this.allProducts.push(this.game.allProduct[product]));

    this.markets = [];
    this.allProducts.map( (key) => this.markets.push(0) );

    var resultPeriode = "result" + this.periode;
    Object.keys(this.game).map( (keyResult) => {
      if(keyResult === resultPeriode){
        this.allProducts.map( (prod, iProd) => {
          this.markets[iProd] = (this.game[keyResult].market[iProd]);
        })
      }
    });
  }

  ngOnChanges( change: SimpleChanges){
    this.ngOnInit();
  }

}
