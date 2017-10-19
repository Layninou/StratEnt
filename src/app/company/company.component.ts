import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

//Language
import { Language } from '../language/language';
import { LanguageService } from '../language/language.service';

//Objects
import { Company } from '../objects/company';
import { Employee } from '../objects/salary';
import { Decision } from '../objects/decision';

//Firebase
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'; // Do not import from 'firebase' as you'll lose the tree shaking benefits

//Service
import { DecisionsService } from '../service/decisions.service';

//Here to do some test
import { TEST_COMPANY } from '../constant/test.const';
import { DECISION }     from '../constant/init-decision.const';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  //Component Output
  companyDecision: Decision;

  //Test Attributs
  teamId: number;
  company: Company;
  employees: Employee[];
  currentUser: firebase.User;
  round: number;
  lang: Language;

  //Hire Fire
  hire: any[];
  fire: any[];

  constructor(private decision: DecisionsService, private dbLink: AngularFireDatabase, private langServ: LanguageService,
              private route: ActivatedRoute, private router: Router, private afAuth: AngularFireAuth) {

    this.round = 15;
    this.company = TEST_COMPANY;
    //TODO: add a reference to the all employee in decision
    this.employees =[
      { type: "Productor", salary: 0 },
      { type: "Sellor", salary: 0 },
      { type: "Manager", salary: 0 }
    ];
    this.companyDecision = DECISION;
    //TODO: regler le cas de non définition
    this.companyDecision.exceptionnal = { exceptionnalSelling: [], exceptionnalPrice: []};

    this.lang = langServ.getLanguageConstructor();
    langServ.getLanguage().subscribe( lang => this.lang = lang );

    afAuth.authState.subscribe((user: firebase.User) => {
      this.currentUser = user;
    });

  }

  ngOnInit() {
     this.route.params.subscribe( (param) =>{
        this.teamId = + param['id'];
        var teamShare = "team" + this.teamId;

        this.company = this.decision.updateCompany(this.teamId);
        this.round = this.decision.getRound() + 1;
        this.decision.setNumberMachine(this.teamId);
        this.decision.setEmployee(this.teamId);
        this.companyDecision = DECISION;

        if(this.company.decision !== undefined){

          if (this.company.decision.financialDecision !== undefined) {
            this.companyDecision.financialDecision = this.company.decision.financialDecision;
          }
          if (this.company.decision.machineFlux !== undefined) {
            this.companyDecision.machineFlux = this.company.decision.machineFlux;
          }
          if (this.company.decision.productionDecision !== undefined) {
            this.companyDecision.productionDecision = this.company.decision.productionDecision;
          }
          if (this.company.decision.marketingDecision !== undefined) {
            this.companyDecision.marketingDecision = this.company.decision.marketingDecision;
          }
          if (this.company.decision.remuneration !== undefined) {
            this.companyDecision.remuneration = this.company.decision.remuneration;
          }

          //this.companyDecision.hireFire = this.company.decision.hireFire;

          if (this.company.decision.studies !== undefined) {
            this.companyDecision.studies = this.company.decision.studies;
          }

          //this.companyDecision.liquidation = this.company.decision.liquidation;
          //this.companyDecision.exceptionnal = this.company.decision.exceptionnal;
        }

    });
  }


  financialDecision(event): void{
    this.companyDecision.financialDecision = event;
  }

  machineryDecision(event): void{
    this.companyDecision.machineFlux = event;
  }

  productionDecision(event): void{
    this.companyDecision.productionDecision = event;
  }

  marketingDecision(event): void{
    this.companyDecision.marketingDecision = event;
  }

  remunerationDecision(event): void{
    this.companyDecision.remuneration = event;
  }

  encadrementDecision(event): void{
    this.companyDecision.hireFire = event;
  }

  studiesDecision(event): void{
    this.companyDecision.studies = event;
  }

  liquidationDecision(event): void{
    this.companyDecision.liquidation = event;
  }

  exceptionnalDecision(event): void{
    this.companyDecision.exceptionnal = event;
  }

  saveDecision(): void{

    // console.log(this.company.name + " a decide:");
    // console.log(this.companyDecision);

    var pass = "team" + this.teamId;

    if( this.currentUser !== undefined) {
      if( this.currentUser !== null) {

        const company = this.dbLink.object( this.currentUser.uid + '/teams/' + pass + "/decision");
        company.set(this.companyDecision);


        //TODO: increment decision. So we need to verifie if all tema has a decision.
        const dec = this.dbLink.object('/' + this.currentUser.uid + '/hasDecide');
        dec.update({ [pass] : true});

      }
    }

  }

}
