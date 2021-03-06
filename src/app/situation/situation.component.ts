import { Component, OnInit } from '@angular/core';
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
  selector: 'app-situation',
  templateUrl: './situation.component.html',
  styleUrls: ['./situation.component.css']
})
export class SituationComponent implements OnInit {

  teamId: number;
  round: number;
  periode: number;
  listPeriode: any[];
  boolPeriode: boolean[];
  lang: Language;

  company: Company;
  employeesType: Employee[];

  constructor(private route: ActivatedRoute, private router: Router,
              private decision: DecisionsService, private langServ: LanguageService) {
    this.company = TEST_COMPANY;
    this.employeesType =[
      { type: "Productor", salary: 0 },
      { type: "Sellor", salary: 0 },
      { type: "Manager", salary: 0 }
    ];
    this.listPeriode = [];

    this.lang = langServ.getLanguageConstructor();
    langServ.getLanguage().subscribe( lang => this.lang = lang );
  }

  ngOnInit() {
    this.route.params.subscribe( (param) =>{
      this.teamId = + param['id'];
      var teamShare = "team" + this.teamId;
      this.listPeriode = [];
      this.boolPeriode = [];
      this.company = this.decision.updateCompany(this.teamId);
      this.round = this.decision.getRound();
      this.periode = this.decision.getRound() - 1;
      Object.keys(this.company.result).map( (key) => {
        this.listPeriode.push( this.company.result[key] );
        this.boolPeriode.push(false);
      });
      this.boolPeriode[this.boolPeriode.length - 1] = true;
    });

  }

  changePeriode(n: number): void{
    this.periode = n;
    this.boolPeriode.map( (elt,i) => this.boolPeriode[i] = false);
    this.boolPeriode[n] = true;
  }

}
