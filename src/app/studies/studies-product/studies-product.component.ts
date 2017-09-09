import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

class TeamChoice{
  price: number;
  publicity: number;
  marketing: number;
  sellor: number;
  credit: number;

  quality?: number;
}

@Component({
  selector: 'studies-product',
  templateUrl: './studies-product.component.html',
  styleUrls: ['./studies-product.component.css']
})
export class StudiesProductComponent implements OnInit, OnChanges {

  @Input() game: any;
  @Input() periode: number;

  private allTeams: any[];
  private allProducts: any[];
  private productsChoices: any[];
  private proprety: any[];

  constructor() {}

  ngOnInit() {
    this.allTeams = [];
    this.allProducts = [];
    Object.keys(this.game.teams).map( (team) => this.allTeams.push(this.game.teams[team]));
    Object.keys(this.game.allProduct).map( (product) => this.allProducts.push(this.game.allProduct[product]));

    this.productsChoices = [];
    this.proprety = [];
    var falseChoice = {
      price: 0,
      publicity: 0,
      marketing: 0,
      sellor: 0,
      credit: 0
    }
    Object.keys(falseChoice).map( (key) => this.proprety.push(key));

    var resultPeriode = "result" + this.periode;
    Object.keys(this.game).map( (keyResult) => {
      if(keyResult === resultPeriode){

        this.allProducts.map( (product, iProd) => {

          var teamsChoice: TeamChoice[] = [];
          this.allTeams.map( (team, index) => teamsChoice.push({
            price: 0,
            publicity: 0,
            marketing: 0,
            sellor: 0,
            credit: 0
          }));

          this.allTeams.map( (team, iTeam) => {
            var teamName = "team" + iTeam;
            teamsChoice[iTeam].price = this.game[keyResult][teamName].choice[iProd].priceDecision;
            teamsChoice[iTeam].publicity = this.game[keyResult][teamName].choice[iProd].publicityDecision;
            teamsChoice[iTeam].marketing = this.game[keyResult][teamName].choice[iProd].marketingAction;
            teamsChoice[iTeam].sellor = this.game[keyResult][teamName].choice[iProd].sellorAffected;
            teamsChoice[iTeam].credit = this.game[keyResult][teamName].choice[iProd].clientCredit;
          });

          this.productsChoices.push(teamsChoice);

        });
      }
    });

  }

  ngOnChanges(change: SimpleChanges){
    this.ngOnInit();
  }

}
