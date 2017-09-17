import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

//Language
import { Language } from '../language/language';
import { LanguageService } from '../language/language.service';

//Objects
import { Company }  from '../objects/company';
import { Employee } from '../objects/salary';
import { Result }   from '../objects/result';

//Service
import { DecisionsService } from '../service/decisions.service';

//Constant
import { TEST_COMPANY } from '../constant/test.const';

@Component({
  selector: 'app-comptability',
  templateUrl: './comptability.component.html',
  styleUrls: ['./comptability.component.css']
})
export class ComptabilityComponent implements OnInit, OnChanges {

  teamId: number;
  round: number;
  periode: number;
  listPeriode: any[];
  boolPeriode: boolean[];

  company: Company;
  employeesTest: Employee[];
  lang: Language;

  constructor(private route: ActivatedRoute, private router: Router,
              private decision: DecisionsService, private langServ: LanguageService) {
    this.company = TEST_COMPANY;
    this.employeesTest =[
      { type: "Productor", salary: 0 },
      { type: "Sellor", salary: 0 },
      { type: "Manager", salary: 0 }
    ];

    this.lang = langServ.getLanguageConstructor();
    langServ.getLanguage().subscribe( lang => this.lang = lang );
  }

  ngOnInit() {
    this.route.params.subscribe( (param) =>{
      this.teamId = + param['id'];
      this.listPeriode = [];
      this.boolPeriode = [];

      var teamShare = "team" + this.teamId;
      this.company = this.decision.updateCompany(this.teamId);
      this.round = this.decision.getRound() + 1;
      this.periode = this.decision.getRound() - 1;
      Object.keys(this.company.result).map( (key) => {
        this.listPeriode.push( this.company.result[key] );
        this.boolPeriode.push(false);
      });
      this.boolPeriode[this.boolPeriode.length - 1] = true;
    });
  }

  ngOnChanges(change: SimpleChanges) {
    this.ngOnInit();
  }

  changePeriode(n: number): void{
    this.periode = n;
    this.boolPeriode.map( (elt,i) => this.boolPeriode[i] = false);
    this.boolPeriode[n] = true;
  }

}
