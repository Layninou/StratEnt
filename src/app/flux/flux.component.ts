import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

//Objects
import { Company }  from '../objects/company';

//Service
import { DecisionsService } from '../service/decisions.service';

//Constant
import { TEST_COMPANY } from '../constant/test.const';

@Component({
  selector: 'app-flux',
  templateUrl: './flux.component.html',
  styleUrls: ['./flux.component.css']
})
export class FluxComponent implements OnInit {

  teamId: number;
  round: number;
  periode: number;
  listPeriode: any[];
  company: Company;

  constructor(private route: ActivatedRoute, private router: Router,
              private decision: DecisionsService) {
    this.company = TEST_COMPANY;
  }

  ngOnInit() {
    this.route.params.subscribe( (param) =>{
      this.teamId = + param['id'];
      var teamShare = "team" + this.teamId;
      this.listPeriode = [];
      this.company = this.decision.updateCompany(this.teamId);
      this.round = this.decision.getRound() + 1;
      this.periode = this.decision.getRound() - 1;
      Object.keys(this.company.result).map( (key) => { this.listPeriode.push( this.company.result[key] ); });
    });
  }

  changePeriode(n: number): void{
    this.periode = n;
  }

}
