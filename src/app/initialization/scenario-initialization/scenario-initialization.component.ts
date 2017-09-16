import { Component, OnInit, Output, EventEmitter } from '@angular/core';

//Language
import { Language } from '../../language/language';
import { LanguageService } from '../../language/language.service';

//Objects
import { Game } from '../../objects/game';
import { Product } from '../../objects/product';
import { Company } from '../../objects/company';

//Service
import { InitializationService } from '../../service/initialization.service';

//Constant
import { ORDINATIX } from '../../scenario/Ordinatix';

@Component({
  selector: 'scenario-initialization',
  templateUrl: './scenario-initialization.component.html',
  styleUrls: ['./scenario-initialization.component.css']
})
export class ScenarioInitializationComponent implements OnInit {

  @Output('game') gameChoose: EventEmitter<Game> = new EventEmitter<Game>();
  @Output('products') productsNumber: EventEmitter<Product[]> = new EventEmitter<Product[]>();
  @Output('capital') capital: EventEmitter<number> = new EventEmitter<number>();
  @Output('machines') nbMachine: EventEmitter<number> = new EventEmitter<number>();
  products: Product[];
  game: Game;
  lang: Language;

  constructor(private initService: InitializationService, private langServ: LanguageService) {
    this.lang = langServ.getLanguageConstructor();
    langServ.getLanguage().subscribe( lang => this.lang = lang );
  }

  ngOnInit() {

  }

  gameOrdinatix(): void{
    this.game = ORDINATIX;
    this.products   = this.initService.initProducts(ORDINATIX.allProduct.length);
    this.capital.emit(1500000);
    this.nbMachine.emit(10);
    this.productsNumber.emit(this.products);
    this.gameChoose.emit(this.game);
  }

}
