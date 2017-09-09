import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//Services
import { DecisionsService } from '../../service/decisions.service';

//Objects
import { FinancialDecision } from '../../objects/decision/financial';

@Component({
  selector: 'company-finances',
  templateUrl: './company-finances.component.html',
  styleUrls: ['./company-finances.component.css']
})
export class CompanyFinancesComponent implements OnInit {

  @Input() financial : FinancialDecision;
  @Output("financial-decision") financialOutput: EventEmitter<FinancialDecision> = new EventEmitter<FinancialDecision>();

  constructor(private decision: DecisionsService) { }

  ngOnInit() {
  }

  changement(): void{
    this.financialOutput.emit(this.financial);
  }

}
