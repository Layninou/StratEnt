import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

//Language
import { Language } from '../../language/language';
import { LanguageService } from '../../language/language.service';

@Component({
  selector: 'asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit, OnChanges {

  @Input() company: any;
  @Input() periode: number;
  asset: any;
  lang: Language;

  constructor(private langServ: LanguageService) {
    this.lang = langServ.getLanguageConstructor();
    langServ.getLanguage().subscribe( lang => this.lang = lang );
  }

  ngOnInit() {

    var resultPeriode = "result" + this.periode;
    Object.keys(this.company.result).map( (keyResult) => {
      if(keyResult === resultPeriode){
        this.asset = this.company.result[keyResult].flux;
      }
    });

  }

  ngOnChanges(changes: SimpleChanges){
    this.ngOnInit();
  }

}
