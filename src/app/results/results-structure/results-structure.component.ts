import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Company }  from '../../objects/company';
import { Employee } from '../../objects/salary';

@Component({
  selector: 'results-structure',
  templateUrl: './results-structure.component.html',
  styleUrls: ['./results-structure.component.css']
})
export class ResultsStructureComponent implements OnInit, OnChanges {

  @Input() company: any;
  @Input() periode: number;

  newStructure: any;
  oldStructure: any;

  constructor() { }

  ngOnInit() {
    var resultPeriode = "result" + this.periode;
    var oldResultPeriode = "result" + (this.periode - 1);
    Object.keys(this.company.result).map( (key) => {
      if(key === resultPeriode){
        this.newStructure = this.company.result[key].structure;
      }
      if(key === oldResultPeriode){
        this.oldStructure = this.company.result[key].structure;
      }
    });
  }

  ngOnChanges(changes: SimpleChanges){
    this.ngOnInit();
  }

}
