import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//Language
import { Language } from '../../language/language';
import { LanguageService } from '../../language/language.service';

//Objects
import { Production } from '../../objects/decision/production';
import { Product } from '../../objects/product';

//Services
import { DecisionsService } from '../../service/decisions.service';


@Component({
  selector: 'company-fabrication',
  templateUrl: './company-fabrication.component.html',
  styleUrls: ['./company-fabrication.component.css']
})
export class CompanyFabricationComponent implements OnInit {

  @Input() products: Product[];
  @Input() production: Production;
  @Output('production') productionOutput: EventEmitter<Production> = new EventEmitter<Production>();
  lang: Language;

  constructor(private decServ: DecisionsService, private langServ: LanguageService) {
    this.lang = langServ.getLanguageConstructor();
    langServ.getLanguage().subscribe( lang => this.lang = lang );
  }

  //TODO: si product non null, remplir avec ancienne data à l'init
  ngOnInit() {
    this.products.map(
      () => {
        this.production.production.push(0);
        this.production.affectedMachine.push(0);
        this.production.affectedProductor.push(0);
      }
    );
  }

  changement(): void{
    this.productionOutput.emit(this.production);
    var numberProductor = 0;
    this.production.affectedProductor.map( (number) => numberProductor += number);
    this.decServ.changeProductor(numberProductor);
  }

}
