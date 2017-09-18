import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

//Language
import { Language } from '../../language/language';
import { LanguageService } from '../../language/language.service';

@Component({
  selector: 'results-financial',
  templateUrl: './results-financial.component.html',
  styleUrls: ['./results-financial.component.css']
})
export class ResultsFinancialComponent implements OnInit, OnChanges {

  @Input() company: any;
  @Input() periode: number;
  finances: any;
  lang: Language;

  constructor(private langServ: LanguageService) {
    this.lang = langServ.getLanguageConstructor();
    langServ.getLanguage().subscribe( lang => this.lang = lang );
  }

  ngOnInit() {
    this.finances = [];
    var resultPeriode = "result" + this.periode;
    Object.keys(this.company.result).map( (keyResult) => {
      if(keyResult === resultPeriode){
        this.finances = this.company.result[keyResult].finance;
      }
    });
  }

  ngOnChanges(changes: SimpleChanges){
    this.ngOnInit();
  }

}
