import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//Language
import { Language } from '../../language/language';
import { LanguageService } from '../../language/language.service';

//Objects
import {Product} from '../../objects/product';
import { Studies } from '../../objects/decision/studies';

@Component({
  selector: 'company-studies',
  templateUrl: './company-studies.component.html',
  styleUrls: ['./company-studies.component.css']
})
export class CompanyStudiesComponent implements OnInit {

  @Input() products: Product[];
  @Input() studies: Studies;
  @Output('studies') studiesOutput: EventEmitter<Studies> = new EventEmitter<Studies>();
  lang: Language;

  //TODO:Regler question du montant
  montant: number;

  constructor(private langServ: LanguageService) {
    this.lang = langServ.getLanguageConstructor();
    langServ.getLanguage().subscribe( lang => this.lang = lang );
  }

  ngOnInit() {
    this.montant = 0;
    this.products.map(
      () => this.studies.productStudies.push(false)
    );
  }

  changement(): void{
    this.studiesOutput.emit(this.studies);
  }

}
