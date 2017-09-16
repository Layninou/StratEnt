import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//Language
import { Language } from '../../language/language';
import { LanguageService } from '../../language/language.service';

//Object
import { Politic } from '../../objects/politic';

@Component({
  selector: 'politics-initialization',
  templateUrl: './politics-initialization.component.html',
  styleUrls: ['./politics-initialization.component.css']
})
export class PoliticsInitializationComponent implements OnInit {

  @Input() politics: Politic;
  lang: Language;

  constructor(private langServ: LanguageService) {
    this.lang = langServ.getLanguageConstructor();
    langServ.getLanguage().subscribe( lang => this.lang = lang );
  }

  ngOnInit() {
  }

}
