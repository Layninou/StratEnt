import { Injectable } from '@angular/core';

//Objects
import { Game }     from '../objects/game';
import { Product }  from '../objects/product';
import { Company }  from '../objects/company';
import { Decision } from '../objects/decision';
import { Result }   from '../objects/result';

import { Situation }    from '../objects/result/situation';
import { Choice }       from '../objects/result/choice';
import { Charges }      from '../objects/result/charges';
import { Exploitation } from '../objects/result/exploitation';
import { Structure }    from '../objects/result/structure';
import { Finances }     from '../objects/result/finance';
import { Exceptional }  from '../objects/result/exceptional';
import { Exercice }     from '../objects/result/exercice';
import { Flux }         from '../objects/result/flux';

//Constant
import { NULL_GAME } from '../constant/init-Game.const';

//Service
import { ModelizationService } from '../service/modelization.service';
import { CalculusService }     from '../service/calculus.service';

//Firebase
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

/*
* This service manage all result without calculus
* @service
* @author: layninou
*/
@Injectable()
export class ResultService {

  game: Game;
  theoricalPotential: number[];
  realPotential: number[];
  marketPart: any[];

  constructor(private dbLink: AngularFireDatabase,
              private model: ModelizationService,
              private calculus: CalculusService) {
    this.marketPart = [];
  }

  //Sharing Result
  transformGame(protoGame: any): Game{
    var syncGame: Game = NULL_GAME;
    Object.keys(protoGame).map( (key, index) => {
      if( key === "politic"){
        syncGame.politic = protoGame[key];
      }
      if( key === "product"){
        syncGame.allProduct = protoGame[key];
      }
      if( key === "teams"){
        syncGame.teams = protoGame[key];
      }
      if( key === "round"){
        syncGame.round = protoGame[key];
      }
      if( key === "hasDecide"){
        syncGame.nbDecision = protoGame[key];
      }
      if( key === "result"){
        syncGame.result = protoGame[key];
      }
      if( key.startsWith("result")){
        syncGame[key] = protoGame[key];
      }
    })
    this.game = syncGame;
    return syncGame;
  }

  getAllResult(): FirebaseListObservable<any[]>{
    return this.dbLink.list('/test/result');
  }

  nullTheDecision(): void{
    this.game.nbDecision = undefined;
  }

  pushGame(game: Game): void{
    this.game = game;
  }

  getGame(): Game{
    return this.game;
  }

  getRound(): number{
    return this.game.round;
  }


  // Potential Selling

  createTheoricalPotential(game: Game): number[] {
    var gameTeams = [];
    var gameProduct = [];

    Object.keys(game.teams).map( (key) => gameTeams.push(game.teams[key]));
    Object.keys(game.allProduct).map( () => gameProduct.push(0));

    gameTeams.map( (team, indexTeam) => {
      gameProduct.map( (product, indexProd) => {
        gameProduct[indexProd] += team.companyProduct[indexProd].potentialSell;
      })
    });

    this.theoricalPotential = gameProduct;
    return this.theoricalPotential;
  }

  evolutePotential(oldPotential: number, type: string): void {
    this.theoricalPotential.map( (theoricPot) => {
      //theoricPot = functionChooseByTheType with oldPotential
    });
  }

  /*
  * Exponential evolution of the product potential
  * @param {number} evol, the potential selling
  * @param {number} round, the round of the game
  * return {number} return the effective selling
  * @author: layninou
  */
  exponentialEvolution(evol: number, round: number){
    for( var i = 0; i < round; i++){
      evol *= 1.1;
    }
    return evol;
  }

  /*
  * Croissant/Decroissant evolution of the product potential
  * @param {number} evol, the potential selling
  * @param {number} round, the round of the game
  * return {number} return the effective selling
  * @author: layninou
  */
  croidecroiEvolution(evol: number, round: number){
    for( var i = 0; i < round; i++){
      evol += ((-1)^round) * (round * evol / 10);
    }
    return evol;
  }

  /*
  * Random evolution of the product potential
  * @param {number} evol, the potential selling
  * @param {number} round, the round of the game
  * return {number} return the effective selling
  * @author: layninou
  */
  randomEvolution(evol: number, round: number){
    for( var i = 0; i < round; i++){
      evol *= 1 + Math.random();
    }
    return evol;
  }

  /*
  * Random Croissant/Decroissant evolution of the product potential
  * @param {number} evol, the potential selling
  * @param {number} round, the round of the game
  * return {number} return the effective selling
  * @author: layninou
  */
  hardRandomEvolution(evol: number, round: number){
    for( var i = 0; i < round; i++){
      evol *= ((-1)^round) * (1 + Math.random() );
    }
    return evol;
  }

  //
  // Real Selling
  //

  createRealPotential(theoricPot: number[]): number[]{
    var RealPot = [];
    theoricPot.map( (pot) => {
      RealPot.push( Math.round( Math.random() * pot ) );
    });
    return RealPot;
  }

  //
  //Apply Model to Selling!
  //

  initNumberTeam(game: Game): void{
    var nbTeams = 0;
    Object.keys(game.teams).map( () => nbTeams++);
    this.model.setNumberPart(nbTeams);
  }

  initBrand(prod: Product): void{
    var attracts = [];
    Object.keys(prod.attracts).map( (key) => attracts.push(prod.attracts[key]) );

    attracts.map( (attract) => {
      this.model.addBrand(attract.sensibility, attract.type);
    });
  }

  initTeamOrdinatix(team: Company, index: number): void{
    //We make the product in an array to make a model for a particular product
    var products = [];
    Object.keys(team.companyProduct).map( (key) => products.push(team.companyProduct[key]) );

    var priceDec, publicityDec, sellorDec, creditDec, marketingDec, researchDec;
    var price = [], publicity = [], sellor = [], credit = [], marketing = [], research = [];

    //We prepare all importante decision for the model
    var marketDecision = [];
    Object.keys(team.decision.marketingDecision).map( (key) => marketDecision.push(team.decision.marketingDecision[key]) );

    marketDecision.map( (marketDec) => {
      if(marketDec.type === "price"){
        priceDec = marketDec.decision;
        Object.keys(priceDec).map( (key) => price.push(priceDec[key]) );
      }
      if(marketDec.type === "publicity"){
        publicityDec = marketDec.decision;
        Object.keys(publicityDec).map( (key) => publicity.push(publicityDec[key]) );
      }
      if(marketDec.type === "sellorForce"){
        sellorDec = marketDec.decision;
        Object.keys(sellorDec).map( (key) => sellor.push(sellorDec[key]) );
      }
      if(marketDec.type === "marketing"){
        marketingDec = marketDec.decision;
        Object.keys(marketingDec).map( (key) => marketing.push(marketingDec[key]) );
      }
      if(marketDec.type === "credit"){
        creditDec = marketDec.decision;
        Object.keys(creditDec).map( (key) => credit.push(creditDec[key]) );
      }
      if(marketDec.type === "research"){
        researchDec = marketDec.decision;
        Object.keys(researchDec).map( (key) => research.push(researchDec[key]) );
      }
    });

    //We make the model travel for the product "index"
    this.model.initTeamOrdinatix(team.name,
                                price[index], products[index].minPrice,
                                publicity[index], sellor[index],
                                team.decision.remuneration.commission, credit[index],
                                marketing[index], research[index]);

  }

  initAllTeamsOrdinatix(game: Game): any{

    var teams = [];
    Object.keys(game.teams).map( (key) => teams.push(game.teams[key]) );
    var products = [];
    Object.keys(game.allProduct).map( (key) => products.push(game.allProduct[key]) );

    //TODO: init products maybe?
    this.marketPart = [];
    products.map( (prod, indexProd) => {

      var falseMarket = [];

      this.model.setBrandNull();
      this.model.setTeamNull();

      //TODO: set MArket comme il faut
      this.model.setMarketNull();

      this.initBrand(products[indexProd]);

      teams.map( (team) => {
        this.initTeamOrdinatix(team, indexProd);
      });

      this.model.calculMarket();

      teams.map( (team, indexTeam) => {
        falseMarket.push({ [this.model.getTeamName(indexTeam)]: this.model.getMarket(indexTeam)});
      });

      this.marketPart.push(falseMarket);
    });
    return this.marketPart;
  }

  repartBuyer(market: any[], realPotentials: number[]): any{
    var repartition = [];
    market.map( (productMarket, indexProd) => {
      var repartitionBuyer = [];

      productMarket.map( (elementMarket) => {
        var result = 0; //Obligatoire si tu veux rentrer dans le map sans tout foutre en l'air
        Object.keys(elementMarket).map( (key) => result = elementMarket[key] );
        repartitionBuyer.push( Math.round(result * realPotentials[indexProd]) );
      });

      repartition.push(repartitionBuyer);
    });
    return repartition;
  }

  //Machine and Hire Fire

  createHireFireProductor(company: Company): any[]{

    var numberProductor = 0;
    if(company.employeesList !== undefined){
      Object.keys(company.employeesList).map( (key) => {
        if( company.employeesList[key] === "Productor" ){
          numberProductor++;
        }
      })
    }

    var hireNumber = 0;
    var fireNumber = 0;
    //TODO: You know whatToDo
    Object.keys(company.decision.hireFire).map( (key) =>{
      if(company.decision.hireFire[key].type === "Productor"){
        hireNumber = company.decision.hireFire[key].hire;
        fireNumber = company.decision.hireFire[key].fire;
      }
    });

    var productorList = [];
    var newNumberProductor = numberProductor + hireNumber - fireNumber;

    for( var i = 0; i < newNumberProductor; i++){
      productorList.push({
        type: "Productor",
        salary: 45000
      });
    }

    return productorList;

  }

  createHireFireSellor(company: Company): any{

    var numberSellor = 0;

    if(company.employeesList !== undefined){
      Object.keys(company.employeesList).map( (key) => {
        if( company.employeesList[key] === "Sellor" ){
          numberSellor++;
        }
      })
    }

    var hireNumber = 0;
    var fireNumber = 0;
    //TODO: You know whatToDo
    Object.keys(company.decision.hireFire).map( (key) =>{
      if(company.decision.hireFire[key].type === "Sellor"){
        hireNumber = company.decision.hireFire[key].hire;
        fireNumber = company.decision.hireFire[key].fire;
      }
    });

    var sellorList = [];
    var newNumberSellor = numberSellor + hireNumber - fireNumber;

    for( var i = 0; i < newNumberSellor; i++){
      sellorList.push({
        type: "Sellor",
        salary: 54000
      });
    }

    return sellorList;

  }

  createHireFireManager(company: Company): any{

    var numberManager = 0;

    if(company.employeesList !== undefined){
      Object.keys(company.employeesList).map( (key) => {
        if( company.employeesList[key] === "Manager" ){
          numberManager++;
        }
      })
    }

    var hireNumber = 0;
    var fireNumber = 0;
    //TODO: You know whatToDo
    Object.keys(company.decision.hireFire).map( (key) =>{
      if(company.decision.hireFire[key].type === "Manager"){
        hireNumber = company.decision.hireFire[key].hire;
        fireNumber = company.decision.hireFire[key].fire;
      }
    });

    var sellorList = [];
    var newNumberSellor = numberManager + hireNumber - fireNumber;

    for( var i = 0; i < newNumberSellor; i++){
      sellorList.push({
        type: "Manager",
        salary: 105000
      });
    }

    return sellorList;

  }

  createHireFire(company: Company): any[]{

    var productorList = this.createHireFireProductor(company);
    var sellorList = this.createHireFireSellor(company);
    var managerList = this.createHireFireManager(company);

    var employeeList = [];
    productorList.map( (employee) => employeeList.push(employee));
    sellorList.map( (employee) => employeeList.push(employee));
    managerList.map( (employee) => employeeList.push(employee));

    return employeeList;

  }

  createAllHireFire(game: Game): any[]{

    var teams = [];
    Object.keys(game.teams).map( (key) => {
      teams.push(game.teams[key])
    });

    var employeesList = [];
    teams.map( (team, index) => {
      employeesList.push(this.createHireFire(team));
    });

    return employeesList;

  }

  createNewMachinery(company: Company, game: Game): any[]{

    var machinery = []
    var numberMachine = 0;
    Object.keys(company.companyMachinery).map( (key) => {
      numberMachine++;
      machinery.push(company.companyMachinery[key]);
    });

    var buyMachine  = company.decision.machineFlux.buyMachine;
    var sellMachine = company.decision.machineFlux.sellMachine;

    var alreadyExistingMachine = numberMachine - sellMachine;
    var newMachinery = [];

    //repush already existing machine
    for( var i = 0; i < alreadyExistingMachine; i++){
      newMachinery.push(machinery[i])
    }

    //Push new machines
    if( buyMachine > 0){
      for(var i = 0; i < buyMachine; i++){
        newMachinery.push(game.politic.machineryType);
      }
    }

    return newMachinery;

  }

  createAllNewMachinery(game: Game): any[]{

    var teams = [];
    Object.keys(game.teams).map( (key) => {
      teams.push(game.teams[key])
    });

    var machineryList = [];
    teams.map( team => {
      machineryList.push(this.createNewMachinery(team, game));
    });

    return machineryList;
  }

  //Choice

  getAffectedMachine(company: Company, productIndex: number): number{
    var affectedMachine = company.decision.productionDecision.affectedMachine[productIndex];
    return affectedMachine;
  }

  getPercentAffectedMachine(company: Company, productIndex: number): number{
    var numberMachine = 0;
    company.companyMachinery.map( () => numberMachine++);
    var affectedMachine = company.decision.productionDecision.affectedMachine[productIndex];
    var PercentMachine = ( affectedMachine / numberMachine ) * 100;
    return PercentMachine;
  }

  getAffectedProductor(company: Company, productIndex: number): number{
    var affectedProductor = company.decision.productionDecision.affectedProductor[productIndex];
    return affectedProductor;
  }

  getPlannedProduction(company: Company, productIndex: number): number{
    var plannedProduction = company.decision.productionDecision.production[productIndex];
    return plannedProduction;
  }

  getFabricationTime(company: Company, productIndex: number): number{
    var fabricationTime = 0;
    return fabricationTime;
  }

  getPriceDecision(company: Company, productIndex: number): number{
    var market = [];
    Object.keys(company.decision.marketingDecision).map( (key) => {
      market.push(company.decision.marketingDecision[key]);
    });

    var priceDecision = 0;
    market.map( (market, indexMarket) => {
      if(market.type === "price"){
        priceDecision = market.decision[productIndex];
      }
    });

    return priceDecision;
  }

  getQualityDecision(company: Company, productIndex: number): number{
    var market = [];
    Object.keys(company.decision.marketingDecision).map( (key) => {
      market.push(company.decision.marketingDecision[key]);
    });

    var qualityDecision = 0;
    market.map( (market, indexMarket) => {
      if(market.type === "research"){
        qualityDecision = market.decision[productIndex];
      }
    });

    return qualityDecision;
  }

  getPublicityDecision(company: Company, productIndex: number): number{
    var market = [];
    Object.keys(company.decision.marketingDecision).map( (key) => {
      market.push(company.decision.marketingDecision[key]);
    });

    var publicityDecision = 0;
    market.map( (market, indexMarket) => {
      if(market.type === "publicity"){
        publicityDecision = market.decision[productIndex];
      }
    });

    return publicityDecision;
  }

  getSellorDecision(company: Company, productIndex: number): number{
    var market = [];
    Object.keys(company.decision.marketingDecision).map( (key) => {
      market.push(company.decision.marketingDecision[key]);
    });

    var sellorDecision = 0;
    market.map( (market, indexMarket) => {
      if(market.type === "sellorForce"){
        sellorDecision = market.decision[productIndex];
      }
    });

    return sellorDecision;
  }

  getMarketingDecision(company: Company, productIndex: number): number{
    var market = [];
    Object.keys(company.decision.marketingDecision).map( (key) => {
      market.push(company.decision.marketingDecision[key]);
    });

    var marketingDecision = 0;
    market.map( (market, indexMarket) => {
      if(market.type === "marketing"){
        marketingDecision = market.decision[productIndex];
      }
    });

    return marketingDecision;
  }

  getCreditDecision(company: Company, productIndex: number): number{
    var market = [];
    Object.keys(company.decision.marketingDecision).map( (key) => {
      market.push(company.decision.marketingDecision[key]);
    });

    var creditDecision = 0;
    market.map( (market, indexMarket) => {
      if(market.type === "credit"){
        creditDecision = market.decision[productIndex];
      }
    });

    return creditDecision;
  }

  makeChoice(company: Company, indexProd: number): Choice{

    var affectedMachine = this.getAffectedMachine(company, indexProd);
    var purcentMachine = this.getPercentAffectedMachine(company, indexProd);
    var affectedProductor = this.getAffectedProductor(company, indexProd);
    var productionPlanned = this.getPlannedProduction(company, indexProd);
    var fabricationTime = this.getFabricationTime(company, indexProd);

    //TODO: faire les cas null !!! si la decision est inexistante
    var qualityDecision = this.getQualityDecision(company, indexProd);
    var priceDecision = this.getPriceDecision(company, indexProd);
    var publicityDecision = this.getPublicityDecision(company, indexProd);
    var sellorAffected = this.getSellorDecision(company, indexProd);
    var marketingAction = this.getMarketingDecision(company, indexProd);
    var clientCredit = this.getCreditDecision(company, indexProd);

    var choice : Choice = {
      affectedMachine: affectedMachine,
      purcentMachine: purcentMachine,
      affectedProductor: affectedProductor,
      productionPlanned: productionPlanned,
      fabricationTime: fabricationTime,
      qualityDecision: qualityDecision,
      priceDecision: priceDecision,
      publicityDecision: publicityDecision,
      sellorAffected: sellorAffected,
      marketingAction: marketingAction,
      clientCredit: clientCredit
    }

    return choice;

  }

  makeCompanyChoices(company: Company): Choice[]{
    var choices: Choice[] = [];
    Object.keys(company.companyProduct).map( (product, indexProd) => {
      choices.push(this.makeChoice(company,indexProd));
    })
    return choices;
  }

  makeChoices(game: Game): any[]{
    var allChoices = [];

    var teams = [];
    Object.keys(game.teams).map( (key) => {
      teams.push(game.teams[key])
    });

    teams.map( (team) =>{
      allChoices.push(this.makeCompanyChoices(team));
    });

    return allChoices;
  }

  //Structure

  productionCapacity(company: Company): number{
    var production = 0;

    var machinery = [];
    Object.keys(company.companyMachinery).map( (key) => machinery.push(company.companyMachinery[key]));

    machinery.map( (machine) =>{
      production += machine.productCapacity;
    });

    return production;
  }

  numberProduct(company: Company): number{
    var nbProduct = 0;
    Object.keys(company.companyProduct).map( () => nbProduct++);
    return nbProduct;
  }

  getStockValue(): number{
    return 0;
  }

  getProductors(company: Company): number{
    var nbProductor = 0;
    if(company.employeesList !== undefined){
      //TODO: You know!
      Object.keys(company.employeesList).map( (key) => {
        if( company.employeesList[key].type === "Productor" ){
          nbProductor++;
        }
      })
    }
    return nbProductor;
  }

  getSellors(company: Company): number{
    var nbSellor = 0;
    if(company.employeesList !== undefined){
      //TODO: You know!
      Object.keys(company.employeesList).map( (key) => {
        if( company.employeesList[key].type === "Sellor" ){
          nbSellor++;
        }
      })
    }
    return nbSellor;
  }

  getManager(company: Company): number{
    var nbManager = 0;
    if(company.employeesList !== undefined){
      //TODO: You know!
      Object.keys(company.employeesList).map( (key) => {
        if( company.employeesList[key].type === "Manager" ){
          nbManager++;
        }
      })
    }
    return nbManager;
  }

  getDebt(company: Company, turnovers: number[]): number{
    return this.makeCreanceProduct(company, turnovers);
  }

  //TODO
  getDisturbed(): number{
    return 0;
  }

  getStrikes(): number{
    return 0;
  }

  makeOneStructure(company: Company, turnovers: number[]): Structure{

    var capacityProduction  = this.productionCapacity(company);
    var numberProduct       = this.numberProduct(company);
    var stockValue          = this.getStockValue();
    var numberProductor     = this.getProductors(company);;
    var numberSellor        = this.getSellors(company);
    var numberManager       = this.getManager(company);
    var debtClient          = this.getDebt(company, turnovers);
    var disturbed           = this.getDisturbed();
    var strike              = this.getStrikes();

    var structure : Structure = {
      capacityProduction: capacityProduction,
      numberProduct: numberProduct,
      stockValue: stockValue,
      numberProductor: numberProductor,
      numberSellor: numberSellor,
      numberManager: numberManager,
      debtClient: debtClient,
      disturbed: disturbed,
      strike: strike
    }

    return structure;
  }

  makeAllStructure(game: Game, turnovers: any[]): any{
    var structures = [];

    var teams = [];
    Object.keys(game.teams).map( key => teams.push(game.teams[key]));

    teams.map( (team, indexTeam) => {
      var structure: Structure;
      structure = this.makeOneStructure(team, turnovers[indexTeam]);
      structures.push(structure);
    });

    return structures;
  }

  //Situation

  realProduction(company: Company, game: Game, indexProduct: number): number{

    var products = [];
    Object.keys(game.allProduct).map( key => products.push(game.allProduct[key]));

    var hypoProduction = company.decision.productionDecision.production[indexProduct];
    var possibleProductionMachine   = this.calculus.calculProductPossibleMachine(products[indexProduct], company, company.decision, indexProduct);
    var possibleProductionProductor = this.calculus.calculProductPossibleProductor(game.politic, company.decision, indexProduct);

    const limitOvertime = 0.01 * (100 + game.politic.overtimePercent);
    var percentOvertime = this.calculus.calculOvertime(game.politic, company.companyProduct[indexProduct], company.decision, indexProduct);

    if( hypoProduction > possibleProductionMachine){
      return possibleProductionMachine;
    }
    if(percentOvertime > 1){
      if(percentOvertime < limitOvertime){
        return hypoProduction;
      }
      return possibleProductionProductor;
    }
    return hypoProduction;

  }

  useMachinePercent(company: Company, indexProduct: number): number{
    var use = this.calculus.calculUseMachine(company, company.companyProduct[indexProduct] ,company.decision, indexProduct);
    use = 0.01 * Math.round( 10000 * use);
    return use;
  }

  overtime(game: Game, company: Company, indexProduct: number): number{
    var time = this.calculus.calculOvertime(game.politic, company.companyProduct[indexProduct], company.decision, indexProduct);
    //TODO: prevoir les heures sup sup et greve!
    if(time > 1){
      var overtime: number = 0.01 * Math.round(10000 * (time - 1));
      return overtime;
    }
    return 0;
  }

  normalSelling(production: number, buyer: number): number{
    console.log("normal selling:");
    var sell = production - buyer;
    console.log("sell:" + sell);
    console.log("production:" + production);
    console.log("buyer:" + buyer);
    if(sell <= 0){
      return production;
    }
    if( sell > 0){
      return buyer;
    }
  }

  turnover(selling: number, company: Company, indexProduct: number): number{
    var price = 0;
    company.decision.marketingDecision.map( marketing => {
      if(marketing.type === "price"){
        price = marketing.decision[indexProduct];
      }
    });
    return this.calculus.calculTurnover(selling, price);
  }

  marketShare(turnovers: number[], indexTeam: number): number{
    return this.calculus.calculMarketShare(turnovers, indexTeam);
  }

  stock(production: number, buyer: number):number{
    if( (production - buyer) > 0){
      return production - buyer;
    }
    return 0;
  }

  makeOneProductSituation(buyer: number[], game: Game, company: Company, indexProduct: number, indexTeam: number): Situation{
    var realProduction = this.realProduction(company, game, indexProduct);
    var machinePercent = this.useMachinePercent(company, indexProduct);
    var overtime = this.overtime(game, company, indexProduct);

    console.log("");
    console.log("team : " + indexTeam);
    console.log("produit : " + indexProduct);
    var selling = this.normalSelling(realProduction, buyer[indexTeam]);
    console.log("Vente final : " + selling);

    var turnover = this.turnover(selling, company, indexProduct);

    var stockQuantity = this.stock(realProduction, buyer[indexTeam]);
    // console.log("stock du produit " + indexProduct + " est de " + stockQuantity);
    var stockValue = this.valueSellStockProduct(company, game, stockQuantity, indexProduct);

    var situation: Situation = {
      realProduction: realProduction,
      machinePercent: machinePercent,
      overtime: overtime,
      sellingNormal: selling,
      sellingClear: 0,
      sellingExceptionnal: 0,
      sellingValue: turnover,
      marketPart: 0,
      stock: stockQuantity,
      stockValue: stockValue
    };

    return situation;
  }

  makeOneProductAllSituations(buyer: any[], game: Game, indexProduct: number): Situation[]{
    var situations: Situation[] = [];

    var teams = [];
    Object.keys(game.teams).map( key => teams.push(game.teams[key]));

    teams.map( (company, indexTeam) => {
      situations.push(this.makeOneProductSituation(buyer[indexProduct],game,company, indexProduct, indexTeam));
    });

    return situations;
  }

  situationsMarket(game: Game, situations: Situation[]): void{
    var totalTurnover = [];

    var teams = [];
    Object.keys(game.teams).map( key => teams.push(game.teams[key]));

    situations.map( sit => totalTurnover.push(sit.sellingValue))
    teams.map( (company, indexCompany) => {
      situations[indexCompany].marketPart = this.marketShare(totalTurnover,indexCompany);
    });
  }

  makeAllSituations(buyer: number[], game: Game): any[]{
    var situationProduct = [];

    var products = [];
    Object.keys(game.allProduct).map( key => products.push(game.allProduct[key]));

    products.map( (product, indexProd) => {
      var situations: Situation[] = [];
      situations = this.makeOneProductAllSituations(buyer, game, indexProd);
      this.situationsMarket(game, situations);
      situationProduct.push(situations);
    });

    return situationProduct;
  }

  resortSituations(game: Game, situations: any[]): any[]{
    var teamSituations = [];

    var teams = [];
    var products = [];

    Object.keys(game.teams).map( key => teams.push(game.teams[key]));
    Object.keys(game.allProduct).map( key => products.push(game.allProduct[key]));

    teams.map( (team, indexTeam) => {
      var productSituations = [];

      products.map( (product,indexProd) => {
        productSituations.push(situations[indexProd][indexTeam]);
      });

      teamSituations.push(productSituations);
    });

    return teamSituations;
  }

  makeCreanceProduct(company: Company, turnoversProduct: number[]): number{

    var debt = 0;

    var products = [];
    Object.keys(company.companyProduct).map( key => products.push(company.companyProduct[key]));

    products.map( (product, indexProd) => {
      debt = this.calculus.calculDebt(turnoversProduct, company.decision, indexProd);
    });

    return debt;
  }

  makeAllCreance(game: Game, turnoversTeam: any[]): number[]{

    var debt = [];

    var teams = []
    Object.keys(game.teams).map( key => teams.push(game.teams[key]));

    teams.map( (team, indexTeam) => {
      debt.push(this.makeCreanceProduct(team, turnoversTeam[indexTeam]))
    });

    return debt;
  }

  getAllTurnover(situationsTeams: any[]): any[]{

    var turnoversTeam = [];

    situationsTeams.map( (situationsTeam, indexTeam) => {
      var turnoversProduct = []

      situationsTeam.map( (situationProduct, indexProduct) => {
        turnoversProduct.push(situationProduct.sellingValue);
      });

      turnoversTeam.push(turnoversProduct);
    });

    return turnoversTeam;
  }


  //Stock

   valueSellStockProduct(company: Company, game: Game, stock: any, indexProduct: number): number {
    var stockValue = 0;

    var products = [];
    Object.keys(company.companyProduct).map( (key) => products.push(company.companyProduct[key]));

    stockValue = this.calculus.calculStockProductionValue(company, products[indexProduct], game.politic, company.decision,
                                        indexProduct, company.decision.productionDecision.production[indexProduct], stock );
    return stockValue;
  }

  valueSellStockTeams(game: Game, stock: any, indexProduct: number): number[]{
    var stockValue = [];

    var teams = [];
    Object.keys(game.teams).map( (key) => teams.push(game.teams[key]));

    teams.map( (team, indexTeam) => {
      stockValue.push(this.valueSellStockProduct(team, game, stock, indexProduct));
    });

    return stockValue;
  }

  valueSellStock(game: Game, stock: any): any[]{
    var stockValue = [];

    var products = [];
    Object.keys(game.allProduct).map( (key) => products.push(game.allProduct[key]));

    products.map( (product, indexProduct) => {
      stockValue.push(this.valueSellStockTeams(game, stock, indexProduct));
    });

    return stockValue;
  }

  makeOneProductExploitation(buyer: number[], game: Game, company: Company,  indexProduct: number, indexTeam: number ): Exploitation{

    var realProduction = this.realProduction(company, game, indexProduct);
    var selling = this.normalSelling(realProduction, buyer[indexTeam]);
    var stockQuantity = this.stock(realProduction, buyer[indexTeam]);
    //TODO, redo for more turn
    var stockValue = this.valueSellStockProduct(company, game, stockQuantity, indexProduct);

    var exploitation = {
      sellingNormalValue: selling,
      sellingClearValue: 0,
      sellingSpecialValue: 0,
      stockValue: stockValue,
      subvention: 0
    };

    return exploitation;
  }

  makeOneProductAllExploitations(buyer: any[], game: Game, indexProduct: number): Exploitation[]{
    var exploitations: Exploitation[] = [];

    var teams = [];
    Object.keys(game.teams).map( key => teams.push(game.teams[key]));

    teams.map( (company, indexTeam) => {
      exploitations.push(this.makeOneProductExploitation(buyer[indexProduct],game,company, indexProduct, indexTeam));
    });

    return exploitations;
  }

  makeAllExploitations(buyer: number[], game: Game): any[]{
    var exploitationProduct = [];

    var products = [];
    Object.keys(game.allProduct).map( key => products.push(game.allProduct[key]));

    products.map( (product, indexProd) => {
      var exploitations: Exploitation[] = [];
      exploitations = this.makeOneProductAllExploitations(buyer, game, indexProd);
      exploitationProduct.push(exploitations);
    });

    return exploitationProduct;
  }

  resortExploitations(game: Game, exploitations: any[]): any[]{
    var teamExploitations = [];

    var teams = [];
    var products = [];

    Object.keys(game.teams).map( key => teams.push(game.teams[key]));
    Object.keys(game.allProduct).map( key => products.push(game.allProduct[key]));

    teams.map( (team, indexTeam) => {
      var productExploitations = [];

      products.map( (product,indexProd) => {
        productExploitations.push(exploitations[indexProd][indexTeam]);
      });

      teamExploitations.push(productExploitations);
    });

    return teamExploitations;
  }

  makeOneTotalExploitation(company: Company, exploitations: any[]): Exploitation{
    var sellingNormalValue = 0;
    var sellingClearValue = 0;
    var sellingSpecialValue = 0;
    var stockValue = 0;
    var subvention = 0;

    exploitations.map( (exploitation) => {
      sellingNormalValue  += exploitation.sellingNormalValue;
      sellingClearValue   += exploitation.sellingClearValue;
      sellingSpecialValue += exploitation.sellingSpecialValue;
      stockValue          += exploitation.stockValue;
      subvention          += exploitation.subvention;
    });

    subvention = company.decision.financialDecision.subventions;

    var exploitationTotal : Exploitation = {
      sellingNormalValue: sellingNormalValue,
      sellingClearValue: sellingClearValue,
      sellingSpecialValue: sellingSpecialValue,
      stockValue: stockValue,
      subvention: subvention
    }

    return exploitationTotal;
  }

  makeAllTotalExploitations(exploitationPack: any[], game: Game): any[]{
    var allExploitations : Exploitation[] = [];

    var teams    = [];
    var products = [];
    Object.keys(game.teams).map( key => teams.push(game.teams[key]));
    Object.keys(game.allProduct).map( key => products.push(game.allProduct[key]));

    var exploitations = [];
    teams.map( (team, indexTeam) => {
      var teamExploitations = [];
      products.map( (prod, indexProduct) => {
        teamExploitations.push(exploitationPack[indexProduct][indexTeam])
      });
      exploitations.push(teamExploitations);
    });

    exploitations.map( (exploitation, indexExploitation) => allExploitations.push(this.makeOneTotalExploitation(teams[indexExploitation], exploitation)) );

    return allExploitations;
  }

  //Charges

  matterConsommation(company: Company, game: Game, indexProduct: number): number{
    var consommation = this.calculus.calculConsmomationProduct(company.companyProduct[indexProduct], game.politic, company.decision, indexProduct);
    return consommation;
  }

  productorCostProduct(company: Company, game: Game, indexProduct: number): number{
    //TODO: prevoir envoie de producteur dans le resultat
    var productors = 0;

    var employees = [];
    Object.keys(company.decision.productionDecision.affectedProductor)
    .map( (keys) => employees.push(company.decision.productionDecision.affectedProductor[keys]));

    productors = employees[indexProduct];

    var cost = this.calculus.productorCost(productors, game.politic);
    return cost;
  }

  qualityCostProduct(dec: Decision, indexProduct: number): number{
    var cost;
    dec.marketingDecision.map( (market) => {
      if( market.type === "research"){
        cost = market.decision[indexProduct];
      }
    });
    return cost;
  }

  publicityCostProduct(dec: Decision, indexProduct: number): number{
    var cost = 0;
    dec.marketingDecision.map( (market) => {
      if( market.type === "publicity"){
        cost += market.decision[indexProduct];
      }
    });
    return cost;
  }

  marketingCostProduct(dec: Decision, indexProduct: number): number{
    var cost = 0;
    dec.marketingDecision.map( (market) => {
      if( market.type === "marketing"){
        cost += market.decision[indexProduct];
      }
    });
    return cost;
  }

  sellorCost(buyer: number[], company: Company, game: Game, indexTeam: number, indexProduct: number): number{
    var sellors = 0;

    var markets = [];
    Object.keys(company.decision.marketingDecision).map( (keys) => markets.push(company.decision.marketingDecision[keys]));

    markets.map( (market) => {
      if(market.type === "sellorForce"){
        sellors = market.decision[indexProduct];
      }
    });

    var realProduction = this.realProduction(company, game, indexProduct);
    var selling = this.normalSelling(realProduction, buyer[indexTeam]);

    var cost = this.calculus.sellorCost(game.politic, company.decision, sellors, selling);
    return cost;
  }

  //TODO !!!
  stockageCost(): number{
    return 0;
  }

  amortizementDotationProduct(company: Company, indexProduct: number): number{
    var cost = this.calculus.calculProductDotationAmortissement(company, company.decision, indexProduct);
    return cost;
  }

  amortizementDotation(company: Company): number{
    var cost = this.calculus.calculAllDotationAmortissement(company);
    return cost;
  }

  costManager(company: Company, game: Game): number{
    var managers = this.getManager(company);
    var cost = this.calculus.managerSalary(managers, game.politic);
    return cost;
  }

  hireCost(company: Company, game: Game): number{
    var cost = this.calculus.calculHireCost(game.politic, company.decision);
    return cost;
  }

  fireCost(company: Company, game: Game): number{
    var cost = this.calculus.calculFireCost(game.politic, company.decision);
    return cost;
  }

  formationCost(company: Company, game: Game): number{
    var cost = this.calculus.calculFormationCost(game.politic, company.decision);
    return cost;
  }

  fixedCost(company: Company, game: Game): number{

    var numberMachine = 0;
    Object.keys(company.companyMachinery).map( () => numberMachine++);

    var cost = this.calculus.calculFixedCost(game.politic, numberMachine);
    return cost;
  }

  //TODO !!!
  reparationCost():number{
    return 0;
  }

  servicingCost(): number{
    return 0;
  }

  studiesCost(): number{
    return 0;
  }

  assuranceCost(): number{
    return 0;
  }

  makeOneProductCharges(buyer: number[], game: Game, company: Company, indexProduct: number, indexTeam: number): Charges{

    var matterConso   = this.matterConsommation(company, game, indexProduct);
    var productorCost = this.productorCostProduct(company, game, indexProduct);
    var qualityCost   = this.qualityCostProduct(company.decision, indexProduct);
    var publicityCost = this.publicityCostProduct(company.decision, indexProduct);
    var marketCost    = this.marketingCostProduct(company.decision, indexProduct);
    var sellorCost    = this.sellorCost(buyer, company, game, indexTeam, indexProduct);
    var stockCost     = this.stockageCost();
    var amortissement = this.amortizementDotationProduct(company, indexProduct);

    var charges: Charges = {
      materialConso: matterConso,
      directLabour: productorCost,
      qualityCost: qualityCost,
      publicityCost: publicityCost,
      marketingCost: marketCost,
      sellerLabour: sellorCost,
      stockCost: stockCost,
      amortissementDot: amortissement
    }

    return charges;

  }

  makeOneProductAllCharges(buyer: any[], game: Game, indexProduct: number): Charges[]{
    var charges: Charges[] = [];

    var teams = [];
    Object.keys(game.teams).map( key => teams.push(game.teams[key]));

    teams.map( (company, indexTeam) => {
      charges.push(this.makeOneProductCharges(buyer[indexProduct],game,company, indexProduct, indexTeam));
    });

    return charges;
  }

  makeAllCharges(buyer: any[], game: Game): any[]{
    var chargesProduct = [];

    var products = [];
    Object.keys(game.allProduct).map( key => products.push(game.allProduct[key]));

    products.map( (product, indexProd) => {
      var charges: Charges[] = [];
      charges = this.makeOneProductAllCharges(buyer, game, indexProd);
      chargesProduct.push(charges);
    });

    return chargesProduct;
  }

  resortCharges(game: Game, charges: any[]): any[]{
    var teamCharges = [];

    var teams = [];
    var products = [];

    Object.keys(game.teams).map( key => teams.push(game.teams[key]));
    Object.keys(game.allProduct).map( key => products.push(game.allProduct[key]));

    teams.map( (team, indexTeam) => {
      var productCharges = [];

      products.map( (product,indexProd) => {
        productCharges.push(charges[indexProd][indexTeam]);
      });

      teamCharges.push(productCharges);
    });

    return teamCharges;
  }

  makeOneTotalCharges(company: Company, game: Game, allCharges: any[]): Charges{

    //Old Part
    var materialConso    = 0;
    var directLabour     = 0;
    var qualityCost      = 0;
    var publicityCost    = 0;
    var marketingCost    = 0;
    var sellerLabour     = 0;
    var stockCost        = 0;
    var amortissementDot = 0;

    allCharges.map( (charges) => {
      materialConso    += charges.materialConso;
      directLabour     += charges.directLabour;
      qualityCost      += charges.qualityCost;
      publicityCost    += charges.publicityCost;
      marketingCost    += charges.marketingCost;
      sellerLabour     += charges.sellerLabour;
      stockCost        += charges.stockCost;
      amortissementDot += charges.amortissementDot;
    });

    //New Part
    amortissementDot   = this.amortizementDotation(company);
    var managerCost    = this.costManager(company, game);
    var hireCost       = this.hireCost(company, game);
    var fireCost       = this.fireCost(company, game);
    var formationCost  = this.formationCost(company,game);
    var fixedCost      = this.fixedCost(company, game);
    var reparationCost = this.reparationCost();
    var servicingCost  = this.servicingCost();
    var assuranceCost  = this.assuranceCost();
    var studiesCost    = this.studiesCost();

    //Final Part
    var totalCharges: Charges = {
      materialConso: materialConso,
      directLabour: directLabour,
      qualityCost: qualityCost,
      publicityCost: publicityCost,
      marketingCost: marketingCost,
      sellerLabour: sellerLabour,
      stockCost: stockCost,
      amortissementDot: amortissementDot,

      //Other
      managerCost: managerCost,
      hireCost: hireCost,
      fireCost: fireCost,
      formationCost: formationCost,
      productionFixCost: fixedCost,
      reparationCost: reparationCost,
      servicingCost: servicingCost,
      assuranceBonus: assuranceCost,
      studiesCost: studiesCost,
    }

    return totalCharges;
  }

  //TODO: REDO
  makeAllTotalCharges(chargesPack: any[], game: Game): Charges[]{
    var allCharges : Charges[] = [];

    var teams    = [];
    var products = [];
    Object.keys(game.teams).map( key => teams.push(game.teams[key]));
    Object.keys(game.allProduct).map( key => products.push(game.allProduct[key]));

    var charges = [];
    teams.map( (team, indexTeam) => {
      var teamCharges = [];
      products.map( (prod, indexProduct) => {
        teamCharges.push(chargesPack[indexProduct][indexTeam])
      });
      charges.push(teamCharges);
    });

    teams.map( (team, index) => {
      allCharges.push(this.makeOneTotalCharges(team, game, charges[index]));
    });

    return allCharges;
  }

  //Exceptional

  //TODO: Il faut séparer les produit et charges exterieurs
  getExceptionalProducts(dec: Decision): number{
    var exception = 0;
    return exception;
  }

  getExceptionalCharges(dec: Decision): number{
    var exception = 0;
    return exception;
  }

  getExceptionalResult(product: number, charges: number): number{
    var exception = product - charges;
    return exception;
  }

  makeExceptional(company: Company): Exceptional{

    var exceptionalProduct  = this.getExceptionalProducts(company.decision);
    var exceptionalCharges  = this.getExceptionalCharges(company.decision);
    var exceptionalResult   = this.getExceptionalResult(exceptionalProduct,exceptionalCharges);

    var exception: Exceptional = {
      exceptionalProduct: exceptionalProduct,
      exceptionalCharges: exceptionalCharges,
      result: exceptionalResult
    };
    return exception;
  }

  makeAllExceptional(game: Game): Exceptional[]{
    var exceptions: Exceptional[] = [];

    var teams = [];
    Object.keys(game.teams).map( key => teams.push(game.teams[key]));

    teams.map( (team, indexTeam) => {
      exceptions.push(this.makeExceptional(team));
    });

    return exceptions;
  }


  //Finances

  getFinanceProducts(dec: Decision): number{
    var finance = dec.financialDecision.variateLoaning;
    return finance;
  }

  getFinanceCharges(dec: Decision): number{
    var finance = dec.financialDecision.variateLoaning;
    return finance;
  }

  getFinanceResult(product: number, charges: number): number{
    var finance = product - charges;
    return finance;
  }

  makeFinance(company: Company): Finances{

    var financeProducts = this.getFinanceProducts(company.decision);
    var financeCharges  = this.getFinanceCharges(company.decision);
    var financeResult   = this.getFinanceResult(financeProducts,financeCharges);

    var finance: Finances = {
      financeProducts: financeProducts,
      financeCharges: financeCharges,
      result: financeResult
    };
    return finance;
  }

  makeAllFinance(game: Game): Finances[]{
    var finances: Finances[] = [];

    var teams = [];
    Object.keys(game.teams).map( key => teams.push(game.teams[key]));

    teams.map( (team, indexTeam) => {
      finances.push(this.makeFinance(team));
    });

    return finances;
  }


  //Excercice Result
  makeResultExploitation(allExploitation: Exploitation): number{
    var result = 0;
    Object.keys(allExploitation).map( (key) => {
      result += allExploitation[key];
    });
    return result;
  }

  makeResultCharges(allCharges: Charges): number{
    var result = 0;
    Object.keys(allCharges).map( (key) => {
      result += allCharges[key];
    });
    return result;
  }

  makeResultNet(resultExploitation: number, resultCharges: number): number{
    var result = resultExploitation - resultCharges;
    return result;
  }

  makeResultWithTax(resultNet: number): number{
    var result = 0;
    return result;
  }

  //TODO: Do the Exceptional Selling ?
  makeCompanyExercice(allExploitation: Exploitation, allCharges: Charges): Exercice{

    var resultExploitation = this.makeResultExploitation(allExploitation);
    var resultCharges      = this.makeResultCharges(allCharges);
    var exerciceNet        = this.makeResultNet(resultExploitation,resultCharges);
    var exerciceWithTax    = this.makeResultWithTax(exerciceNet);

    var exercice: Exercice = {
      resultExploitation: resultExploitation,
      resultCharges: resultCharges,
      exerciceNet: exerciceNet,
      exerciceWithTax: exerciceWithTax
    };

    return exercice;
  }

  makeAllExercice(game: Game, allExploitation: any[], allCharges: any[]): Exercice[]{
    var exercices: Exercice[] = [];

    var teams = [];
    Object.keys(game.teams).map( key => teams.push(game.teams[key]));

    teams.map( (team, indexTeam) => {
      exercices.push(this.makeCompanyExercice(allExploitation[indexTeam],allCharges[indexTeam]));
    });

    return exercices;
  }

  //Flux

    //Immobilization
  //TODO !!!
  getFluxToolsValue(): number{
    var tools = 0;
    return tools;
  }

  getFluxAmortizationValue(): number{
    var amortization = 0;
    return amortization;
  }

  makeImmobilization(tools: number, amortissement: number): number{
    var immobilization = 0;
    return immobilization;
  }

    //Ciculization

  getFluxStockValue(): number{
    var stock = 0;
    return stock;
  }

  getFluxClientsDebt(): number{
    var client = 0;
    return client;
  }

  getFluxBank(): number{
    var bank = 0;
    return bank;
  }

  makeCirculization(stock: number, client: number, bank: number): number{
    var circulization = 0;
    return circulization;
  }

    //Own Ressources

  getFluxSocialCapital(): number{
    var social = 0;
    return social;
  }

  getFluxReserve(): number{
    var reserve = 0;
    return reserve;
  }

  getFluxExercice(): number{
    var exercice = 0;
    return exercice;
  }

  makeOwnRessources(social: number, reserve: number, exercice: number): number{
    var own = 0;
    return own;
  }

    //Debt Ressources

  getFluxLoans(): number{
    var loan = 0;
    return loan;
  }

  getFluxBankContest(): number{
    var bank = 0;
    return bank;
  }

  getFluxProvider(): number{
    var provider = 0;
    return provider;
  }

  getFluxFiscalDebt(): number{
    var fiscal = 0;
    return fiscal;
  }

  makeBorrowRessources(loans: number, bank: number, provider: number, fiscal: number): number{
    var borrow = 0;
    return borrow;
  }

    //Total

  makeFluxAssets(immobilization: number, circulization: number): number{
    var assets = 0;
    return assets;
  }

  makeFluxLiabilities(own: number, debt: number): number{
    var liabilities = 0;
    return liabilities;
  }


  makeCompanyFlux(): Flux{

    //Actif
    var tools = this.getFluxToolsValue();
    var amortizement = this.getFluxAmortizationValue();
    var immobilisation = this.makeImmobilization(tools, amortizement);

    var stockage = this.getFluxStockValue();
    var clients = this.getFluxClientsDebt();
    var bank = this.getFluxBank();
    var circulization = this.makeCirculization(stockage, clients, bank);

    var totalAssets = this.makeFluxAssets(immobilisation, circulization);

    //Passif
    var socialCapital = this.getFluxSocialCapital();
    var reserve = this.getFluxReserve();
    var exercice = this.getFluxExercice();
    var ownRessource = this.makeOwnRessources(socialCapital, reserve, exercice);

    var borrow = this.getFluxLoans();
    var bankLoans = this.getFluxBankContest();
    var provider = this.getFluxProvider();
    var taxDebts = this.getFluxFiscalDebt();
    var borrowRessource = this.makeBorrowRessources(borrow, bankLoans, provider, taxDebts);

    var totalLiabilities = this.makeFluxLiabilities(ownRessource, borrowRessource);

    var flux: Flux = {
      //Actif
      tools: tools,
      amortizement: amortizement,
      immobilisation: immobilisation,
      stockage: stockage,
      clients: clients,
      bank: bank,
      circulization: circulization,

      totalAssets: totalAssets,

      //Passif
      socialCapital: socialCapital,
      reserve: reserve,
      exercice: exercice,
      ownRessource: ownRessource,
      borrow: borrow,
      bankLoans: bankLoans,
      provider: provider,
      taxDebts: taxDebts,
      borrowRessource: borrowRessource,

      totalLiabilities: totalLiabilities
    }

    return flux;
  }

  makeAllFlux(game: Game): Flux[]{
    var flux: Flux[] = [];

    var teams = [];
    Object.keys(game.teams).map( key => teams.push(game.teams[key]));

    teams.map( (team, indexTeam) => {
      flux.push(this.makeCompanyFlux());
    });

    return flux;
  }

}
