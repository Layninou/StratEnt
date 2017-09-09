import { Component, OnInit } from '@angular/core';

//Objects
import { Initialization } from '../objects/initialization';
import { Politic } from '../objects/politic';
import { Machine } from '../objects/machine';
import { Product } from '../objects/product';
import { Company } from '../objects/company';
import { Attract } from '../objects/attract';
import { Studies } from '../objects/studies';
import { Game }    from '../objects/game';

//Service
import { InitializationService } from '../service/initialization.service';
  //Firebase
import { DbFirebaseService } from '../firebase/db-firebase.service';

//Constante
import { POLITIC } from '../constant/politics.const';
import { STUDIES } from '../constant/studies.const';

@Component({
  selector: 'app-initialization',
  templateUrl: './initialization.component.html',
  styleUrls: ['./initialization.component.css'],
  providers: [ InitializationService, DbFirebaseService ]
})
export class InitializationComponent implements OnInit {

  init: Initialization;
  game: Game;
  newGame: Game;
  products: Product[];
  companies: Company[];
  allCompanies: Company;
  politics: Politic;
  studies: Studies;

  constructor( private initService: InitializationService, private dbLink: DbFirebaseService) {

    this.init = { nbCompany: 4, nbProducts: 2 };
       this.products   = this.initService.initProducts(this.init.nbProducts);
       this.companies    = this.initService.initCompanies(this.init.nbCompany);

    this.allCompanies = {name: "All Company", nbMachine: 0, socialCapital: 0, companyMachinery: [], companyProduct: [], employeesList: []};

    this.politics = POLITIC;
    this.studies = STUDIES;
  }

  ngOnInit() {
  }

  initProducts(event): void {
    this.products = event;
    this.init.nbProducts = this.products.length;
  }

  initCompanies(event): void {
    this.companies = event;
  }

  initAllSocialCapital(event): void {
    this.allCompanies.socialCapital = event;
  }

  initAllNumberMachine(event): void {
    this.allCompanies.nbMachine = event;
  }

  initGame(event): void {
    this.game = event;
    this.politics =this.game.politic;
    this.products = this.game.allProduct;
    this.studies = this.game.studies;
  }

  createTheGame(): void {
    //Initialization of the game
    var teams: Company[] = this.initService.populateTeams(this.companies, this.products, this.politics);
    this.newGame = this.initService.createGame(teams, this.products, this.politics, this.studies);

      //the add round
    this.dbLink.setObjectInFirebaseWithUrl({ round: 0}, "");
    this.dbLink.updateObjectInFirebaseWithUrl({ decision: 0}, "");

    teams.map( ( team, index) => {
      this.dbLink.setObjectInFirebaseWithUrl(team, "teams/team" + index);
    });

    this.dbLink.setObjectInFirebaseWithUrl(this.newGame.politic, "politic");

    this.newGame.allProduct.map( ( product, index) => {
      this.dbLink.setObjectInFirebaseWithUrl(product, "product/product" + index);
    });

    this.dbLink.setObjectInFirebaseWithUrl(this.newGame.studies, "studies");

  }

}
