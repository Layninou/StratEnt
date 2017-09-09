import { Employee } from './salary';
import { Machine } from './machine';
import { GeneralCost } from './general-cost';

export class Politic{
  //Over Pricing
  overtimePercent: number;
  overheadPercent: number;

  //Salary
  firePricePourcent: number;
  hirePricePourcent: number;
  minimalTraining: number;
  typeOfEmployees: Employee[];
  managerRatio: number;

  //Financial Decision
  loaning: number;
  overdraft: number;
  unauthorizedOverdraft: number;
  overdraftAmountPercent: number;
  placement: number;
  VAT: number;
  IT: number; //IS, impotes societe
  supplierCredits: number;

  //Production
  machineProduction: number;
  productorProduction: number;

  //Machinery
  machineryType: Machine;

  //General Cost
  generalCost: GeneralCost;
}
