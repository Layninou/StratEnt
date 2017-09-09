import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'liability',
  templateUrl: './liability.component.html',
  styleUrls: ['./liability.component.css']
})
export class LiabilityComponent implements OnInit, OnChanges {

  @Input() company: any;
  @Input() periode: number;
  liability: any;

  constructor() { }

  ngOnInit() {

    var resultPeriode = "result" + this.periode;
    Object.keys(this.company.result).map( (keyResult) => {
      if(keyResult === resultPeriode){
        this.liability = this.company.result[keyResult].flux;
      }
    });

  }

  ngOnChanges(changes: SimpleChanges){
    this.ngOnInit();
  }

}
