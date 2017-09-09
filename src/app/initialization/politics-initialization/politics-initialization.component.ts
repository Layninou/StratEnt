import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Politic } from '../../objects/politic';

@Component({
  selector: 'politics-initialization',
  templateUrl: './politics-initialization.component.html',
  styleUrls: ['./politics-initialization.component.css']
})
export class PoliticsInitializationComponent implements OnInit {

  @Input() politics: Politic;

  constructor() { }

  ngOnInit() {
  }

}
