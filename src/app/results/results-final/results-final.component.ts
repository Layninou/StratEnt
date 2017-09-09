import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'results-final',
  templateUrl: './results-final.component.html',
  styleUrls: ['./results-final.component.css']
})
export class ResultsFinalComponent implements OnInit, OnChanges {

  @Input() company: any;
  @Input() periode: number;
  exceptional: any;
  exercice: any;

  constructor() { }

  ngOnInit() {

    this.exceptional = [];
    this.exercice = [];
    var resultPeriode = "result" + this.periode;
    Object.keys(this.company.result).map( (keyResult) => {
      if(keyResult === resultPeriode){
        this.exceptional = this.company.result[keyResult].exceptional;
        this.exercice = this.company.result[keyResult].exercice;
      }
    });

  }

  ngOnChanges(changes: SimpleChanges){
    this.ngOnInit();
  }

}
