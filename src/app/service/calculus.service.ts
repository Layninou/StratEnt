import { Injectable } from '@angular/core';

import { Company }  from '../objects/company';
import { Product }  from '../objects/product';
import { Politic }  from '../objects/politic';
import { Decision } from '../objects/decision';

@Injectable()
export class CalculusService {

  constructor() { }

  calculDebt(turnover: number[], dec: Decision, indexProduct: number): number{
    var debt = 0;
    dec.marketingDecision.map( market => {
      if(market.type === "credit"){
        debt = turnover[indexProduct] * (0.01 * market.decision[indexProduct]);
      }
    });
    return Math.round(debt);
  }

  calculAffectedMachinePercent(company: Company, dec: Decision, indexProduct: number): number{
    var affected = 0;
    if ( company.companyMachinery.length == 0){
      return 0;
    }
    affected = dec.productionDecision.affectedMachine[indexProduct] / company.companyMachinery.length;
    return affected;
  }

  calculProductPossibleMachine(product: Product, company: Company, dec: Decision, index: number): number{
    //TODO: redo to be specific about the machine use
    var production = 0;
    for(var it = 0; it < dec.productionDecision.affectedMachine[index]; it++){
      production += company.companyMachinery[it].productCapacity / product.productTime;
    }
    return Math.round(production);
  }

  calculProductPossibleProductor(pol: Politic, dec: Decision, index: number): number{
    var production = 0;
    production = pol.productorProduction * dec.productionDecision.affectedProductor[index];
    return production;
  }

  calculTotalFabricationTime(prod: Product, dec: Decision, index: number): number{
    var fabricationTime = 0;
    fabricationTime = dec.productionDecision.production[index] * prod.productTime;
    return fabricationTime;
  }

  calculUseMachine(company: Company, prod: Product, dec: Decision, index: number): number{
    if(this.calculProductPossibleMachine(prod, company, dec, index) === 0){
      return 0;
    }
    var percent = this.calculTotalFabricationTime(prod, dec, index) / (this.calculProductPossibleMachine(prod, company, dec, index) * prod.productTime);
    // console.log("");
    // console.log("fabrication temps total: " + this.calculTotalFabricationTime(prod, dec, index));
    // console.log("production possible machine: " + this.calculProductPossibleMachine(prod, company, dec, index));
    // console.log("");
    // console.log("Overuse: " + percent);
    return percent;
  }

  calculOvertime(pol: Politic, prod: Product, dec: Decision, index: number): number{
    if(this.calculProductPossibleProductor(pol, dec, index) === 0){
      return 0;
    }
    var percent = this.calculTotalFabricationTime(prod, dec, index) / this.calculProductPossibleProductor(pol, dec, index);
    // console.log("OverTime: " + percent);
    return percent;
  }

  //Calculus Turnover

  calculEaringsNormal(selling: number, price: number): number{
    return selling * price;
  }

  calculTurnover(selling: number, price: number): number{
    var turnover = this.calculEaringsNormal(selling, price);
    return turnover;
  }

  calculMarketShare(turnovers: number[], indexTeam: number): number{
    var totalMarket = 0;
    turnovers.map( turnover => totalMarket += turnover);
    if(totalMarket === 0){
      return 0;
    }
    return turnovers[indexTeam] / totalMarket;
  }

  //Stockage

  hasStock(buyer: number, production: number): boolean{
    if( buyer < production){
      return true;
    }
    return false;
  }

  hasInsatisfaction(buyer: number, production: number): boolean{
    if( buyer > production){
      return true;
    }
    return false;
  }

  insatisfactionCreate(buyer: number, production: number): number{
    return buyer - production;
  }

  stockCreate(buyer: number, production: number): number{
    return production - buyer;
  }

  stockValue(stock: number, directCost: number): number{
    return stock * directCost;
  }

  //Calculus Cost
  productorCost(productorNumber: number, pol: Politic): number{
    var salary = 0;
    //TODO: Changer dans l'init la façon de creer un producteur pour que ça soit un "productor" et changer ici après
    pol.typeOfEmployees.map( employee => {
      if(employee.type === "Productor"){
        salary = employee.salary;
      }
    });
    return salary * productorNumber;
  }

  sellorSalary(sellorNumber: number, pol: Politic): number{
    var salary = 0
    //TODO: same than up
    pol.typeOfEmployees.map( employee => {
      if(employee.type === "Sellor"){
        salary = employee.salary;
      }
    });
    return salary * sellorNumber;
  }

  managerSalary(managerNumber: number, pol: Politic): number{
    var salary = 0
    //TODO: same than up
    pol.typeOfEmployees.map( employee => {
      if(employee.type === "Manager"){
        salary = employee.salary;
      }
    });
    return salary * managerNumber;
  }

  sellorCommission(dec: Decision, selling: number): number{
    var bonus = 0;
    bonus = selling * dec.remuneration.commission;
    return bonus;
  }

  sellorCost(pol: Politic, dec: Decision, sellorNumber: number, selling: number): number{
    var cost = 0;
    cost = this.sellorSalary(sellorNumber, pol) +this.sellorCommission(dec, selling);
    return cost;
  }

  //TODO: function
  calculStockageCost(): number{
    var cost = 0;
    return cost;
  }

  calculHireCost(pol: Politic, dec: Decision): number{
    var cost = 0;
    var salariesHire = 0;
    //TODO: regler à initiation les hireFires
    dec.hireFire.map( (hireFire) => {
      if( hireFire.type === "Productor"){
        pol.typeOfEmployees.map( (employee) => {
          if(employee.type === "Productor"){
            salariesHire += hireFire.hire * employee.salary;
          }
        });
      }
      if( hireFire.type === "Sellor"){
        pol.typeOfEmployees.map( (employee) => {
          if(employee.type === "Sellor"){
            salariesHire += hireFire.hire * employee.salary;
          }
        });
      }
      if( hireFire.type === "Manager"){
        pol.typeOfEmployees.map( (employee) => {
          if(employee.type === "Manager"){
            salariesHire += hireFire.hire * employee.salary;
          }
        });
      }
    });

    cost = salariesHire * (0.01 * pol.hirePricePourcent);
    return cost;
  }

  calculFireCost(pol: Politic, dec: Decision): number{
    var cost = 0;
    var salariesFire = 0;

    //TODO: regler à initiation les hireFires
    dec.hireFire.map( (hireFire) => {
      if( hireFire.type === "Producteur"){
        pol.typeOfEmployees.map( (employee) => {
          if(employee.type === "Producteur"){
            salariesFire += hireFire.fire * employee.salary;
          }
        });
      }
      if( hireFire.type === "Sellor"){
        pol.typeOfEmployees.map( (employee) => {
          if(employee.type === "Sellor"){
            salariesFire += hireFire.fire * employee.salary;
          }
        });
      }
      if( hireFire.type === "Manager"){
        pol.typeOfEmployees.map( (employee) => {
          if(employee.type === "Manager"){
            salariesFire += hireFire.fire * employee.salary;
          }
        });
      }
    });

    cost = salariesFire * (0.01 * pol.firePricePourcent);
    return cost;
  }

  calculFormationCost(pol: Politic, dec: Decision): number{
    var cost = 0;
    var salariesHire = 0;

    //TODO: regler à initiation les hireFires
    dec.hireFire.map( (hireFire) => {
      if( hireFire.type === "Producteur"){
        pol.typeOfEmployees.map( (employee) => {
          if(employee.type === "Producteur"){
            salariesHire += hireFire.hire * employee.salary;
          }
        });
      }
      if( hireFire.type === "Sellor"){
        pol.typeOfEmployees.map( (employee) => {
          if(employee.type === "Sellor"){
            salariesHire += hireFire.hire * employee.salary;
          }
        });
      }
      if( hireFire.type === "Manager"){
        pol.typeOfEmployees.map( (employee) => {
          if(employee.type === "Manager"){
            salariesHire += hireFire.hire * employee.salary;
          }
        });
      }
    });

    //TODO: refaire avec decision qui import
    cost = salariesHire * (0.01 * pol.minimalTraining);
    return cost;
  }

  //We don't care about the real production, but the hypothetic one because you buy matter for the hypothetic production
  calculConsmomationProduct(product: Product, pol: Politic, dec: Decision, indexProduct: number): number{
    var consommation = 0;
    consommation = product.unitaryCost * dec.productionDecision.production[indexProduct];
    return consommation;
  }

  calculConsomation(products: Product[], pol: Politic, dec: Decision): number{
    var consommation =0;
    products.map( (product, indexProd) =>{
      consommation += this.calculConsmomationProduct(product, pol, dec, indexProd);
    });
    return consommation;
  }

  //TODO: refaire avce outillage.
  calculAllDotationAmortissement(company: Company): number{
    var dotation = 0;
    //TODO: make amortissement for company, and make it decrease
    var amortization = 5;
    if (amortization >= 0){
      dotation = company.socialCapital / amortization;
    }
    return dotation;
  }

  calculProductDotationAmortissement(company: Company, dec: Decision, indexProd: number): number{
    var dotation = 0;
    dotation = this.calculAllDotationAmortissement(company) / dec.productionDecision.affectedMachine[indexProd];
    return dotation;
  }

  calculDirectCost(company: Company, product: Product, pol: Politic, dec: Decision, indexProduct: number, realProduction: number): number{
    var directCost = 0;

    var matterConso = this.calculConsmomationProduct(product, pol, dec, indexProduct);
    var productorCost = this.productorCost(dec.productionDecision.affectedProductor[0], pol);
    var dotation = this.calculProductDotationAmortissement(company, dec, indexProduct);

    directCost = (matterConso + productorCost + dotation) / realProduction;

    return directCost;
  }

  calculFixedCost(pol: Politic, nbMachine: number): number{
    var fixedCost = 0;

    fixedCost += pol.generalCost.fixedPrice;

    //TODO: test math round here
    // TODO: prepare new tranches
    var tranches = Math.round(nbMachine / 2);
    var costTranches = tranches * pol.generalCost.supplementTranche;

    return fixedCost;
  }

  calculStockProductionValue(company: Company, product: Product, pol: Politic, dec: Decision,
                             indexProduct: number, realProduction: number,
                             stockQuantity: number): number{
    var stockValue = 0;
    stockValue = stockQuantity * this.calculDirectCost(company, product, pol, dec, indexProduct, realProduction);
    return stockValue;
  }

  //Result of the Exercice

  //Flux

}
