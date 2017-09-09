import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../objects/product';

import { InitializationService } from '../../service/initialization.service';

@Component({
  selector: 'affinities-initialization',
  templateUrl: './affinities-initialization.component.html',
  styleUrls: ['./affinities-initialization.component.css']
})
export class AffinitiesInitializationComponent implements OnInit {

  @Input() products: Product[];

  constructor(private initService: InitializationService) { }

  ngOnInit() {
  }

  initAttract(n: number, prod: Product): void{
    this.initService.setProductNumberAttract(n, prod);
    prod.attracts = this.initService.initAttract(n);
  }

}
