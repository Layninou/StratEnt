import { Injectable, Output, EventEmitter  } from '@angular/core';

import { Language } from './language';

//Languages Constant
import { FRENCH } from './languages/french.const'
import { ENGLISH } from './languages/english.const'

@Injectable()
export class LanguageService {

  @Output('language') language: EventEmitter<Language> = new EventEmitter<Language>();
  languages: Language[];
  languageChoose: Language;

  constructor() {
    this.languages = new Array();
    this.languages['fr'] = FRENCH;
    this.languages['en'] = ENGLISH;

    this.languageChoose = this.languages['fr'];
    this.language.emit(this.languageChoose);
  }

  setLanguage(lang: string): void{
    this.languageChoose = this.languages[lang];
    this.language.emit(this.languageChoose);
  }

  getLanguage(): EventEmitter<Language> {
    return this.language;
  }

  getLanguageConstructor(): Language{
    return this.languageChoose;
  }

}
