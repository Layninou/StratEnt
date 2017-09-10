import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Company }  from '../objects/company';
import { Game } from '../objects/game';

//Service
import { DecisionsService } from '../service/decisions.service';
import { ResultService } from '../service/result.service';

//Constant
import { TEST_COMPANY } from '../constant/test.const';
import { NULL_GAME } from '../constant/init-Game.const';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  teamId: number;
  round: number;
  periode: number;
  listPeriode: any[];
  boolPeriode: boolean[];

  company: Company;
  game: Game;

  constructor(private route: ActivatedRoute, private router: Router,
              private decision: DecisionsService, private rServ: ResultService) {
    this.company = TEST_COMPANY;
    this.game = NULL_GAME;
  }

  ngOnInit() {
    this.game = this.rServ.getGame();
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
