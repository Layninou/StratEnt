import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//Language
import { Language } from '../../language/language';
import { LanguageService } from '../../language/language.service';

//Services
import { DecisionsService } from '../../service/decisions.service';

//Objects
import { Remuneration } from '../../objects/decision/remuneration';

@Component({
  selector: 'company-remuneration',
  templateUrl: './company-remuneration.component.html',
  styleUrls: ['./company-remuneration.component.css']
})
export class CompanyRemunerationComponent implements OnInit {

  @Input() remuneration: Remuneration;
  @Output('remuneration') machineryOutput: EventEmitter<Remuneration> = new EventEmitter<Remuneration>();
  lang: Language;

  constructor(private langServ: LanguageService) {
    this.lang = langServ.getLanguageConstructor();
    langServ.getLanguage().subscribe( lang => this.lang = lang );
  }

  ngOnInit() {
  }

  changement(){
    this.machineryOutput.emit(this.remuneration);
  }

}
