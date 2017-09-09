import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../objects/product';

@Component({
  selector: 'product-initialization',
  templateUrl: './product-initialization.component.html',
  styleUrls: ['./product-initialization.component.css']
})
export class ProductInitializationComponent implements OnInit {

  @Input() products: Product[];

  constructor() { }

  ngOnInit() {
  }

}
