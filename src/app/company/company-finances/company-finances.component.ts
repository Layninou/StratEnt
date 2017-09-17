import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//Language
import { Language } from '../../language/language';
import { LanguageService } from '../../language/language.service';

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
  lang: Language;

  constructor(private decision: DecisionsService, private langServ: LanguageService) {
    this.lang = langServ.getLanguageConstructor();
    langServ.getLanguage().subscribe( lang => this.lang = lang );
  }

  ngOnInit() {
  }

  changement(): void{
    this.financialOutput.emit(this.financial);
  }

}
