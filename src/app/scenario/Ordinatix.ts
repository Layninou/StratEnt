import { Game } from '../objects/game';

export const ORDINATIX: Game = {
  round: 0,
  teams: [],

  //The products in the game
  allProduct: [
    {
      minPrice: 8.5, maxPrice: 20, productTime: 0.05,
      potentialSell: 250000, unitaryCost: 4, typeEvolution: "c/d",
      nbAttracts: 6,
      attracts: [
        {name: "Prix", sensibility: 40, type: "price"},
        {name: "Publicite", sensibility: 25, type: "publicity"},
        {name: "Force de Vente", sensibility: 12.5, type: "sellorForce"},
        {name: "Action Commercial", sensibility: 12.5, type: "marketing"},
        {name: "Recherche en Qualité", sensibility: 5, type: "research"},
        {name: "Credit Client", sensibility: 5, type: "credit"}
      ],
      loyalty: 40
    },
    {
      minPrice: 200, maxPrice: 400, productTime: 1.5,
      potentialSell: 18000, unitaryCost: 120, typeEvolution: "exponential",
      nbAttracts: 6,
      attracts: [
        {name: "Prix", sensibility: 10, type: "price"},
        {name: "Publicite", sensibility: 20, type: "publicity"},
        {name: "Force de Vente", sensibility: 10, type: "sellorForce"},
        {name: "Action Commercial", sensibility: 10, type: "marketing"},
        {name: "Recherche en Qualité", sensibility: 20, type: "research"},
        {name: "Credit Client", sensibility: 30, type: "credit"}
      ],
      loyalty: 50
    }
  ],

  //The politic of the game
  politic: {
            //Over Pricing
            overtimePercent: 20,
            overheadPercent: 25,

            //Salary
            firePricePourcent: 75,
            hirePricePourcent: 50,
            minimalTraining: 1.6,
            typeOfEmployees: [
              {
                type: "Productor",
                salary: 45000
              },
              {
                type: "Sellor",
                salary: 54000
              },
              {
                type: "Manager",
                salary: 105000
              }
            ],
            managerRatio: 10,

            //Financial Decision
            loaning: 6,
            overdraft: 7,
            unauthorizedOverdraft: 10,
            overdraftAmountPercent: 50,
            placement: 2,
            VAT: 20,
            IT: 33.33, //IS, impotes societe
            supplierCredits: 60,

            //Production
            machineProduction: 2500,
            productorProduction: 2000,

            //Machinery
            machineryType: {
              productCapacity: 2500,
              price: 150000,
              amortization: 5,
              repairPrice: 500,
              disturbed: false,
            },

            //General Cost
            generalCost: {
              stockage: 1.5,
              fixedPrice: 750000,
              immbilizationTranche: 300000,
              supplementTranche: 15000,
              insurance: 3,
            },
          },

    //Studies
    studies: {
      productStudies: [10000,10000],
      marketStudies: 3000,
      concurrenceStudies: 3000,
      structureStudies: 3000,
      sellingStudies: 8000,
      performanceStudies: 3000,

    }
}
