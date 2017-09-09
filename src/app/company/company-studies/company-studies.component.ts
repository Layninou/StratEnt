import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Product} from '../../objects/product';
import { Studies } from '../../objects/decision/studies';

@Component({
  selector: 'company-studies',
  templateUrl: './company-studies.component.html',
  styleUrls: ['./company-studies.component.css']
})
export class CompanyStudiesComponent implements OnInit {

  @Input() products: Product[];
  @Input() studies: Studies;
  @Output('studies') studiesOutput: EventEmitter<Studies> = new EventEmitter<Studies>();

  //TODO:Regler question du montant
  montant: number;

  constructor() { }

  ngOnInit() {
    this.montant = 0;
    this.products.map(
      () => this.studies.productStudies.push(false)
    );
  }

  changement(): void{
    this.studiesOutput.emit(this.studies);
  }

}
