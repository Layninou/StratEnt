import { Injectable } from '@angular/core';

import { Initialization } from '../objects/initialization';
import { Machine }        from '../objects/machine';
import { Product }        from '../objects/product';
import { Company }        from '../objects/company';
import { Attract }        from '../objects/attract';
import { Politic }        from '../objects/politic';
import { Studies }        from '../objects/studies';
import { Game }           from '../objects/game';

@Injectable()
export class InitializationService {

  constructor() { }

  initProducts(nbProduct: number): Product[]{
    var products = [];
    for(var i = 0; i < nbProduct; i++){
      var p = new Product();
      p.attracts = this.initAttract(1); //TODO: A refaire pour plus de fonctionalité
      products.push(p);
    }
    return products;
  }

  initCompanies(nbCompany: number): Company[]{
    var companies = [];
    for(var i = 0; i < nbCompany; i++){
      var c = new Company();
      companies.push(c);
    }
    return companies;
  }

  initAttract(nbAttract: number): Attract[]{
    var attracts = [];
    for( var i = 0; i < nbAttract; i++){
      var a = new Attract();
      attracts.push(a);
    }
    return attracts;
  }

  initCompaniesName(companies: Company[]): void{
    for(var i = 1; i < companies.length + 1; i++){
      var name = "Entreprise " + (i);
      this.setCompanyName(name, companies[i - 1]);
    }
  }

  setCompanyName(name: string, company: Company): void{
    company.name = name;
  }

  setProductNumberAttract(nb: number, product: Product): void{
    product.nbAttracts = nb;
  }

  setCompanyNumberMachine(nb: number, company: Company): void{
    company.nbMachine = nb;
  }

  setAllCompanyNumberMachine(nb: number, companies: Company[]): void{
    for(var i = 0; i < companies.length; i++){
      this.setCompanyNumberMachine(nb, companies[i]);
    }
  }

  setCompanySocialCapital(nb: number, company: Company): void{
    company.socialCapital = nb;
  }

  setAllCompanySocialCapital(nb: number, companies: Company[]): void{
    for(var i = 0; i < companies.length; i++){
      this.setCompanySocialCapital(nb, companies[i]);
    }
  }

  populateTeams(companies: Company[], products: Product[], politics: Politic): Company[]{
    //TODO: redo then we could destroy a machine and we can choose how many product they have
    var machineType: Machine = politics.machineryType;

    companies.map(
      (company) => {
        company.companyMachinery = this.populateCompanyMachine(company, machineType);
        company.companyProduct = products;
        company.employeesList = [];
      }
    );

    return companies;
  }

  populateCompanyMachine(company: Company, machineType: Machine): Machine[]{
    var machines: Machine[] = [];
    for(var i = 0; i < company.nbMachine; i++){
      machines.push(machineType);
    }
    return machines;
  }

  createGame(companies: Company[], products: Product[], politics: Politic, studies: Studies): Game{
    const round = 0;
    const decision = 0;

    var game: Game = {
      round: round,
      teams: companies,
      allProduct: products,
      politic:politics,
      studies: studies
    }
    return game;
  }

}
