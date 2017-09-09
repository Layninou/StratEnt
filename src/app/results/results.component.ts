import { Component, OnInit } from '@angular/core';

import { Company } from '../objects/company';
import { Employee } from '../objects/salary';

import { TEST_COMPANY } from '../constant/test.const';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  testCompany: Company;
  employeesTest: Employee[];

  constructor() { }

  ngOnInit() {
    this.testCompany = TEST_COMPANY;
    this.employeesTest =[
      { type: "Producteur", salary: 0 },
      { type: "Vendeur", salary: 0 },
      { type: "Cadre", salary: 0 }
    ];
  }

}
