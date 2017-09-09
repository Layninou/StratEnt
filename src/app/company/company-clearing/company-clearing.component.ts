import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../objects/product';

@Component({
  selector: 'company-clearing',
  templateUrl: './company-clearing.component.html',
  styleUrls: ['./company-clearing.component.css']
})
export class CompanyClearingComponent implements OnInit {

  @Input() products: Product[];
  @Input() liquidation: number[];
  @Output('liquidation') liquidationOutput: EventEmitter<number[]> = new EventEmitter<number[]>();

  constructor() { }

  ngOnInit() {
    this.liquidation = [];
    //No need to change init, always 0 everywhere
    this.products.map(
      () => this.liquidation.push(0)
    );
    this.liquidationOutput.emit(this.liquidation);
  }

  changement(): void{
    this.liquidationOutput.emit(this.liquidation);
  }

}
