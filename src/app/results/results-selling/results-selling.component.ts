import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Company }  from '../../objects/company';
import { Situation } from '../../objects/result/situation';

@Component({
  selector: 'results-selling',
  templateUrl: './results-selling.component.html',
  styleUrls: ['./results-selling.component.css']
})
export class ResultsSellingComponent implements OnInit, OnChanges {

  @Input() company: any;
  @Input() periode: number;
  situations: any[];

  constructor() { }

  ngOnInit() {
    this.situations = [];
    var resultPeriode = "result" + this.periode;
    Object.keys(this.company.result).map( (keyResult) => {
      if(keyResult === resultPeriode){
        Object.keys(this.company.result[keyResult].situation).map( (key) => this.situations.push(this.company.result[keyResult].situation[key]) );
      }
    });
  }

  ngOnChanges(changes: SimpleChanges){
    this.ngOnInit();
  }

}
