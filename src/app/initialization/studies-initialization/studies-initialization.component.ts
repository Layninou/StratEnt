import { Component, OnInit, Input } from '@angular/core';

//Language
import { Language } from '../../language/language'
import { LanguageService } from '../../language/language.service'

//Objects
import { Product } from '../../objects/product';
import { Studies } from '../../objects/studies';

//Service
import { InitializationService } from '../../service/initialization.service';

@Component({
  selector: 'studies-initialization',
  templateUrl: './studies-initialization.component.html',
  styleUrls: ['./studies-initialization.component.css']
})
export class StudiesInitializationComponent implements OnInit {

  @Input() products: Product[];
  @Input() studies: Studies;
  lang: Language;

  constructor(private initService: InitializationService, private langServ: LanguageService) {
    this.lang = langServ.getLanguageConstructor();
    langServ.getLanguage().subscribe( lang => this.lang = lang );
  }

  ngOnInit() {
  }

}
