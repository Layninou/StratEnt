import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'studies-selling',
  templateUrl: './studies-selling.component.html',
  styleUrls: ['./studies-selling.component.css']
})
export class StudiesSellingComponent implements OnInit, OnChanges {

  @Input() game: any;
  @Input() periode: number;

  allTeams: any[];
  allProducts: any[];
  selling: any;


  constructor() {
    this.selling = {
      potential: 0,
      effective: 0,
      unsatisfed: 0
    };
  }

  ngOnInit() {

    this.allTeams = [];
    this.allProducts = [];
    Object.keys(this.game.teams).map( (team) => this.allTeams.push(this.game.teams[team]));
    Object.keys(this.game.allProduct).map( (product) => this.allProducts.push(this.game.allProduct[product]));

    // this.selling = [];
    var resultPeriode = "result" + this.periode;
    Object.keys(this.game).map( (keyResult) => {
      if(keyResult === resultPeriode){

        var potentialSelling = [];
        var effectiveSelling = [];
        var unsatisfaction = [];

        this.allProducts.map( (prod, iProd) => {
          potentialSelling.push(this.game[keyResult].potentialSell[iProd]);
          effectiveSelling.push(this.game[keyResult].effectiveSell[iProd]);
        });

        this.selling.potential = potentialSelling;
        this.selling.effective = effectiveSelling;
      }
    });

  }

  ngOnChanges(change: SimpleChanges){
    this.ngOnInit();
  }

}
