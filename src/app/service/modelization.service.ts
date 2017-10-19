import { Injectable } from '@angular/core';

class Brand{
  brandWeight: number;
  brandType: string;
}

class Team{
  name: string;
  brands: Brand[];
  attraction: number;
  marketPart: number;
}

/*
* This service create and manage the model of brands
* @service
* @author: layninou
*/
@Injectable()
export class ModelizationService {

  private numberPart: number;
  private brands: Brand[];
  private teams: Team[];

  private hasSellor: boolean;
  private theoricalMarketValue: number; //This is the part of the market of each participant if they sell perfectly and sell at the price they decide

  //attribute needed for the function... find with the product and the decision
  // TODO: Create an object that will do the thing
  private price: number;
  private minPrice: number;
  private publicity: number;
  private research: number;
  private sellor: number;
  private commission: number;
  private credit: number;
  private marketing: number;

  private fidelity?: number;

  constructor() {
    this.teams = [];
    this.brands = [];
    this.hasSellor = true;
  }

  theoricalMarket(price: number){
    var theoricalMarket = 100 / this.numberPart;
    this.theoricalMarketValue = theoricalMarket * price;
    if( price === 0 ){
      this.theoricalMarketValue = theoricalMarket;
    }
  }

  setNumberPart(n: number){
    this.numberPart = n;
  }

  setTeamNull(): void{
    this.teams = [];
  }

  setMarketNull(): void{
    this.teams.map( team => {
      team.marketPart = 0
      team.attraction = 0;
    });
  }

  setMarket(market: number): void{
    this.teams.map( team => team.marketPart = market);
  }

  setBrandNull(): void {
    this.brands = [];
  }

  addBrand(weight: number, type: string): void {
    this.brands.push({
      brandWeight: weight,
      brandType: type
    });
  }

  //These are the brand function
  priceBrandFunction(price: number, priceMin: number): number{
    var idealPrice = priceMin + (0.05 * priceMin);
    return Math.exp( - (price - priceMin) );
  }

  publicityBrandFunction(publicity: number): number{
    var fct: number = 1.2 * ( 1 - Math.exp( - publicity / (10 * this.theoricalMarketValue)) );
    return fct;
  }

  sellingForceBrandFunction(sellor: number, commission: number): number{
    if (sellor == 4) {
      var force = 0;
      return force;
    }
    if (sellor <= 4) {
      var force = ((4 / 10) + ( (4 / 10) * (commission / 100)));
      return force;
    }
    if (sellor <= 10) {
      var force = ((sellor / 10) + ( (sellor / 10) * (commission / 100)));
      return force;
    }
    return 1 + (commission / 100);
  }

  creditBrandFunction(credit: number): number{
    if (credit <= 15) {
      return 0;
    }
    if (credit <= 30) {
      return 0.3;
    }
    if (credit <= 45) {
      return 0.5;
    }
    if (credit <= 60) {
      return 0.7;
    }
    if (credit <= 75) {
      return 0.9;
    }
    if (credit <= 90) {
      return 1.2;
    }
    return 1.2;
  }

  marketingBrandFunction(sellor: number, marketing: number): number{
    var fct: number = 1.2 * ( 1 - Math.exp( - ( marketing * sellor) / (10 * this.theoricalMarketValue)) );
    return fct;
  }

  //this is the getter/setter for the use of the model's brand

  setPrice(price: number): void {
    this.price = price;
  }

  setMinPrice(price: number): void {
    this.minPrice = price;
  }

  setPublicity(publicity: number): void {
    this.publicity = publicity;
  }

  setResearch(research: number): void {
    this.research = research;
  }

  setSellor(sellor: number): void {
    this.sellor = sellor;
  }

  setCommission(commission: number): void {
    this.commission = commission;
  }

  setCredit(credit: number): void {
    this.credit = credit
  }

  setMarketing(marketing: number): void {
    this.marketing = marketing;
  }


  //Getter/Setter for the team
  addTeam(name: string): Team{
    var team = {
      name: name,
      brands: [],
      attraction: 0,
      marketPart: 0
    };
    this.teams.push(team);
    return team;
  }

  //TODO
  getTeam(name: string): Team {
    return null;
  }



  //This is the model
  brandFunction(type: string): number {
    if(type === "price" ){
      return this.priceBrandFunction(this.price, this.minPrice);
    }
    if(type === "publicity"){
      return this.publicityBrandFunction(this.publicity);
    }
    if(type === "research"){
      return this.publicityBrandFunction(this.research);
    }
    if(type === "credit" ){
      return this.creditBrandFunction(this.credit);
    }
    if(type === "sellorForce"){
      return this.sellingForceBrandFunction(this.sellor, this.commission);
    }
    if(type === "marketing"){
      return this.marketingBrandFunction(this.sellor, this.marketing);
    }
    return 0;
  }

  calculateAttraction(): number{
    var attract = 0;
    this.brands.map( (brand) => {
      attract += brand.brandWeight * this.brandFunction(brand.brandType);
    });
    // if(this.brandFunction("sellorForce") == 0){
    //   attract = 0;
    // }
    return attract;
  }

  addAttraction(team: Team): void{
    team.attraction = this.calculateAttraction();
  }

  calculMarket(): void {
    var maxAttract = 0;
    this.teams.map( (team) => maxAttract += team.attraction);
    if ( this.fidelity === undefined ){
      this.fidelity = 0;
    }
    this.teams.map( (team) => {
      team.marketPart = (team.marketPart * this.fidelity) + ( (1 - this.fidelity) * (team.attraction / maxAttract) );
      // if(maxAttract === 0){
      //   team.marketPart = 0;
      // }
    });
  }

  getTeamName(index: number): string{
    return this.teams[index].name;
  }

  getMarket(index: number): number{
    return this.teams[index].marketPart;
  }


  //The model for this game
  initTeamOrdinatix(name: string,
                    price: number, minPrice: number,
                    publicity: number, sellor: number,
                    commission: number, credit: number,
                    marketing: number, research: number,
                    market?:  number): void {
    //Init the market
    this.setPrice(price);
    this.setMinPrice(minPrice);
    this.setPublicity(publicity);
    this.setSellor(sellor);
    this.setCommission(commission);
    this.setCredit(credit);
    this.setMarketing(marketing);
    this.setResearch(research);

    //init theoricalMarketValue (so define by the price)
    this.theoricalMarket(price);

    //found the adapted team
    var team: Team;
    team = this.addTeam(name);
    team.brands = this.brands;
    this.addAttraction(team);

    if( market !== undefined){
      team.marketPart = market;
    }

  }

}
