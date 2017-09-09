import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//Objects
import { Product } from '../../objects/product';
import { Attract } from '../../objects/attract';
import { Marketing} from '../../objects/decision/marketing';

//Service
import { DecisionsService } from '../../service/decisions.service';

@Component({
  selector: 'company-marketing',
  templateUrl: './company-marketing.component.html',
  styleUrls: ['./company-marketing.component.css']
})
export class CompanyMarketingComponent implements OnInit {

  @Input() products: Product[];
  @Input() marketings: Marketing[];
  @Output('marketings') marketingOutput: EventEmitter<Marketing[]> = new EventEmitter<Marketing[]>();
  largerAttracts: Product;

  constructor(private decServ: DecisionsService) { }

  ngOnInit() {
    this.marketings = [];

    //Max attract that will display
    this.largerAttracts = this.decServ.foundLargerProduct(this.products);

    //init marketing
    this.largerAttracts.attracts.map(
      (attract: Attract) => {
        this.marketings.push({
                type: attract.type,
                decision: []
        })
      }
    );

    this.products.map(
      () => this.marketings.map(
        (mark: Marketing) => mark.decision.push(0)
      )
    );

    this.marketingOutput.emit(this.marketings);
  }

  changement(): void{
    this.marketingOutput.emit(this.marketings);

    var numberSellor = 0;
    this.products.map( (product, iProd) => {
      product.attracts.map( (attract, iAttract) => {
        if(attract.name === "Force de Vente"){
          numberSellor += this.marketings[iAttract].decision[iProd];
        }
      })
    })
    this.decServ.changeSellor(numberSellor);
  }

}
