import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

//Language
import { Language } from '../../language/language';
import { LanguageService } from '../../language/language.service';

//Objects
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

  lang: Language;

  constructor(private langServ: LanguageService) {
    this.lang = langServ.getLanguageConstructor();
    langServ.getLanguage().subscribe( lang => this.lang = lang );
  }

  ngOnInit() {

    if(this.periode !== 0){
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
    else {
      var resultPeriode = "result" + this.periode;
      var oldResultPeriode = "result" + (this.periode - 1);
      Object.keys(this.company.result).map( (key) => {
        if(key === resultPeriode){
          this.newStructure = this.company.result[key].structure;
        }
      });
      this.oldStructure = {
        capacityProduction: 0,
        numberProduct: 0,
        stockValue: 0,
        numberProductor: 0,
        numberSellor: 0,
        numberManager: 0,
        debtClient: 0,
        disturbed: 0,
        strike: 0,
      };
    }

  }

  ngOnChanges(changes: SimpleChanges){
    this.ngOnInit();
  }

}
