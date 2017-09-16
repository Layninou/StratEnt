import { Component, OnInit, Input } from '@angular/core';

//Language
import { Language } from '../../language/language';
import { LanguageService } from '../../language/language.service';

//Object
import { Product } from '../../objects/product';

@Component({
  selector: 'product-initialization',
  templateUrl: './product-initialization.component.html',
  styleUrls: ['./product-initialization.component.css']
})
export class ProductInitializationComponent implements OnInit {

  @Input() products: Product[];
  lang: Language;

  constructor(private langServ: LanguageService) {
    this.lang = langServ.getLanguageConstructor();
    langServ.getLanguage().subscribe( lang => this.lang = lang );
  }

  ngOnInit() {
  }

}
