import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../objects/product';
import { Studies } from '../../objects/studies';

import { InitializationService } from '../../service/initialization.service';

@Component({
  selector: 'studies-initialization',
  templateUrl: './studies-initialization.component.html',
  styleUrls: ['./studies-initialization.component.css']
})
export class StudiesInitializationComponent implements OnInit {

  @Input() products: Product[];
  @Input() studies: Studies;

  constructor(private initService: InitializationService) { }

  ngOnInit() {
  }

}
