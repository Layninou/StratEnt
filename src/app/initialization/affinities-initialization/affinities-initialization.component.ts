import { Component, OnInit, Input } from '@angular/core';

//Language
import { Language } from '../../language/language';
import { LanguageService } from '../../language/language.service';

//Object
import { Product } from '../../objects/product';

//Service
import { InitializationService } from '../../service/initialization.service';

@Component({
  selector: 'affinities-initialization',
  templateUrl: './affinities-initialization.component.html',
  styleUrls: ['./affinities-initialization.component.css']
})
export class AffinitiesInitializationComponent implements OnInit {

  @Input() products: Product[];
  lang: Language;

  constructor(private initService: InitializationService, private langServ: LanguageService) {
    this.lang = langServ.getLanguageConstructor();
    langServ.getLanguage().subscribe( lang => this.lang = lang );
  }

  ngOnInit() {
  }

  initAttract(n: number, prod: Product): void{
    this.initService.setProductNumberAttract(n, prod);
    prod.attracts = this.initService.initAttract(n);
  }

}
