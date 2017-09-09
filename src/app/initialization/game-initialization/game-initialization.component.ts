import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Initialization } from '../../objects/initialization';
import { Product } from '../../objects/product';
import { Company } from '../../objects/company';

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

  constructor(private initService: InitializationService) { }

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
