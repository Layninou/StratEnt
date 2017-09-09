import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Company }  from '../../objects/company';
import { Product }    from '../../objects/product';
import { Employee } from '../../objects/salary';
import { Result }   from '../../objects/result';
import { Charges }   from '../../objects/result/charges';

//Service
import { DecisionsService } from '../../service/decisions.service';
@Component({
  selector: 'results-charge',
  templateUrl: './results-charge.component.html',
  styleUrls: ['./results-charge.component.css']
})
export class ResultsChargeComponent implements OnInit, OnChanges {

  @Input() company: any;
  @Input() periode: number;
  charges: Charges[];
  chargesTotal: Charges;

  sumCharges: number[];
  sumChargesTotal: number;

  constructor(private decision: DecisionsService) { }

  ngOnInit() {
    this.charges = [];
    var resultPeriode = "result" + this.periode;
    Object.keys(this.company.result).map( (keyResult) => {
      if(keyResult === resultPeriode){
        Object.keys(this.company.result[keyResult].charge).map( (key) =>{
          if(key == "all"){
            this.chargesTotal = this.company.result[keyResult].charge[key];
          } else {
            this.charges.push(this.company.result[keyResult].charge[key]);
          }
        });
      }
    });

    this.sumCharges = [];
    this.charges.map( (charge, iProd) => {
      var sumCharge = this.charges[iProd].materialConso;
      sumCharge += this.charges[iProd].directLabour;
      sumCharge += this.charges[iProd].qualityCost;
      sumCharge += this.charges[iProd].publicityCost;
      sumCharge += this.charges[iProd].marketingCost;
      sumCharge += this.charges[iProd].sellerLabour;
      sumCharge += this.charges[iProd].stockCost;
      sumCharge += this.charges[iProd].amortissementDot;

      this.sumCharges.push(sumCharge);
    });

    this.sumChargesTotal = 0;
    Object.keys(this.chargesTotal).map( (key) => {
      this.sumChargesTotal += this.chargesTotal[key];
    });

  }

  ngOnChanges(changes: SimpleChanges){
    this.ngOnInit();
  }

}
