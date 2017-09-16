import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//Language
import { Language } from '../../language/language';
import { LanguageService } from '../../language/language.service';

//Object
import { Initialization } from '../../objects/initialization';
import { Product } from '../../objects/product';
import { Company } from '../../objects/company';

//Service
import { InitializationService } from '../../service/initialization.service';

@Component({
  selector: 'game-initialization',
  templateUrl: './game-initialization.component.html',
  styleUrls: ['./game-initialization.component.css']
})
export class GameInitializationComponent implements OnInit {

  @Input() init: Initialization;
  @Output('update-product') outputProducts: EventEmitter<Product[]> = new EventEmitter<Product[]>();
  @Output('update-companie') outputCompanies: EventEmitter<Company[]> = new EventEmitter<Company[]>();
  products: Product[];
  companies: Company[];
  lang: Language

  constructor(private initService: InitializationService, private langServ: LanguageService) {
    this.lang = langServ.getLanguageConstructor();
    langServ.getLanguage().subscribe( lang => this.lang = lang );
  }

  //We init to null because the parent init everything
  ngOnInit() {
    this.products   = [];
    this.companies  = [];
  }

  initProducts(): void{
    this.products   = this.initService.initProducts(this.init.nbProducts);
    this.outputProducts.emit(this.products);
  }

  initCompanies(): void{
    this.companies    = this.initService.initCompanies(this.init.nbCompany);
    this.outputCompanies.emit(this.companies);
  }

}
