import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

//Language
import { Language } from '../../language/language';
import { LanguageService } from '../../language/language.service';

@Component({
  selector: 'liability',
  templateUrl: './liability.component.html',
  styleUrls: ['./liability.component.css']
})
export class LiabilityComponent implements OnInit, OnChanges {

  @Input() company: any;
  @Input() periode: number;
  liability: any;
  lang: Language;

  constructor(private langServ: LanguageService) {
    this.lang = langServ.getLanguageConstructor();
    langServ.getLanguage().subscribe( lang => this.lang = lang );
  }

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
