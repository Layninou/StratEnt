import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../objects/product';
import { Exceptionnal } from '../../objects/decision/exceptionnal';

@Component({
  selector: 'company-submission',
  templateUrl: './company-submission.component.html',
  styleUrls: ['./company-submission.component.css']
})
export class CompanySubmissionComponent implements OnInit {

  @Input() products: Product[];
  @Input() submission: Exceptionnal;
  @Output('submission') subOutput: EventEmitter<Exceptionnal> = new EventEmitter<Exceptionnal>();

  constructor() {
    
  }

  ngOnInit() {
    this.products.map(
      () => {
        this.submission.exceptionnalSelling.push(0);
        this.submission.exceptionnalPrice.push(0);
      });
  }

  changement(): void{
    this.subOutput.emit(this.submission);
  }

}
