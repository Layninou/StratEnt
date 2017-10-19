import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

//Objects
import { Company }  from '../objects/company';

//Language
import { Language } from '../language/language';
import { LanguageService } from '../language/language.service';

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
  boolPeriode: boolean[];
  company: Company;
  lang: Language;

  constructor(private route: ActivatedRoute, private router: Router,
              private decision: DecisionsService, private langServ: LanguageService) {
    this.company = TEST_COMPANY;
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
      this.round = this.decision.getRound() + 1;
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
