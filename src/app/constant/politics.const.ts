import { Politic } from '../objects/politic';

export const POLITIC: Politic = {
  //Over Pricing
  overtimePercent: 0,
  overheadPercent: 0,

  //Salary
  firePricePourcent: 0,
  hirePricePourcent: 0,
  minimalTraining: 0,
  typeOfEmployees: [
    {
      type: "Productor",
      salary: 0
    },
    {
      type: "Sellor",
      salary: 0
    },
    {
      type: "Manager",
      salary: 0
    }
  ],
  managerRatio: 0,

  //Financial Decision
  loaning: 0,
  overdraft: 0,
  unauthorizedOverdraft: 0,
  overdraftAmountPercent: 0,
  placement: 0,
  VAT: 0,
  IT: 0, //IS, impotes societe
  supplierCredits: 0,

  //Production
  machineProduction: 0,
  productorProduction: 0,

  //Machinery
  machineryType: {
    productCapacity: 0,
    price: 0,
    amortization: 0,
    repairPrice: 0,
    disturbed: false,
  },

  //General Cost
  generalCost: {
    stockage: 0,
    fixedPrice: 0,
    immbilizationTranche: 0,
    supplementTranche: 0,
    insurance: 0,
  },
}
