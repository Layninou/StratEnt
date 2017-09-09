import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Company }  from '../../objects/company';

@Component({
  selector: 'results-productions',
  templateUrl: './results-productions.component.html',
  styleUrls: ['./results-productions.component.css']
})
export class ResultsProductionsComponent implements OnInit, OnChanges {

  @Input() company: any;
  @Input() periode: number;
  exploitations: any[];
  exploitationTotal: any[];

  sumExploitations: number[];
  sumAllExploitations: number;

  constructor() {}

  ngOnInit() {

    this.exploitations = [];
    var resultPeriode = "result" + this.periode;
    Object.keys(this.company.result).map( (keyResult) => {
      if(keyResult === resultPeriode){
        Object.keys(this.company.result[keyResult].exploitation).map( (key) =>{
          if(key == "all"){
            this.exploitationTotal = this.company.result[keyResult].exploitation[key];
          } else {
            this.exploitations.push(this.company.result[keyResult].exploitation[key]);
          }
        });
      }
    });

    this.sumExploitations = [];
    this.exploitations.map( (exploitation, iProd) => {
      var sumExploitation = this.exploitations[iProd].sellingNormalValue;
      sumExploitation += this.exploitations[iProd].sellingClearValue;
      sumExploitation += this.exploitations[iProd].sellingSpecialValue;
      sumExploitation += this.exploitations[iProd].stockValue;

      this.sumExploitations.push(sumExploitation);
    });

    this.sumAllExploitations = 0;
    Object.keys(this.exploitationTotal).map( (key) => {
      this.sumAllExploitations += this.exploitationTotal[key];
    });
  }

  ngOnChanges(changes: SimpleChanges){
    this.ngOnInit();
  }

}
