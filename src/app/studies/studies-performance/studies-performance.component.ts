import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'studies-performance',
  templateUrl: './studies-performance.component.html',
  styleUrls: ['./studies-performance.component.css']
})
export class StudiesPerformanceComponent implements OnInit, OnChanges {

  @Input() game: any;
  @Input() periode: number;

  allTeams: any[];
  allProducts: any[];
  keyList: any[];
  valueList: any[];

  constructor() {}

  ngOnInit() {
    this.allTeams = [];
    this.allProducts = [];
    Object.keys(this.game.teams).map( (team) => this.allTeams.push(this.game.teams[team]));
    Object.keys(this.game.allProduct).map( (product) => this.allProducts.push(this.game.allProduct[product]));

    //TODO
    this.keyList = ["Prix", "Pub", "Marketing", "Sellor", "Credit"];

    this.valueList = [];
    var resultPeriode = "result" + this.periode;
    Object.keys(this.game).map( (keyResult) => {
      if(keyResult === resultPeriode){
          this.allProducts.map( (prod, iProd) =>{
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
