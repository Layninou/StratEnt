import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'studies-concurrence',
  templateUrl: './studies-concurrence.component.html',
  styleUrls: ['./studies-concurrence.component.css']
})
export class StudiesConcurrenceComponent implements OnInit, OnChanges {

  @Input() game: any;
  @Input() periode: number;

  private allTeams: any[];
  private allProducts: any[];
  private keyList: any[];
  private valueList: any[];

  constructor() {

  }

  ngOnInit() {
    this.allTeams = [];
    this.allProducts = [];
    Object.keys(this.game.teams).map( (team) => this.allTeams.push(this.game.teams[team]));
    Object.keys(this.game.allProduct).map( (product) => this.allProducts.push(this.game.allProduct[product]));

    //TODO
    this.keyList = ["Résultat Fiscal", "Résultat Net"];
    this.allProducts.map( (prod, iProd) => this.keyList.push("Produit " + (iProd + 1) + " CA") );

    this.valueList = [];
    var resultPeriode = "result" + this.periode;
    Object.keys(this.game).map( (keyResult) => {
      if(keyResult === resultPeriode){

        this.allTeams.map( (team, iTeam) => {

          const data = this.keyList.reduce((o, key) => Object.assign(o, {[key]: 0}), {});

          //TODO

          this.valueList.push(data);
        });
      }
    });
  }

  ngOnChanges( change: SimpleChanges){
    this.ngOnInit();
  }

}
