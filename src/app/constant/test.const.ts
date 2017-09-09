import { Company } from '../objects/company';
import { Machine } from '../objects/machine';
import { Product } from '../objects/product';

export const TEST_COMPANY: Company = {
  name: "companie test",
  socialCapital: 1500000,
  nbMachine: 10,
  companyMachinery: [
    { productCapacity: 2000, price: 150000, amortization: 5, repairPrice: 500, disturbed: false },
    { productCapacity: 2000, price: 150000, amortization: 5, repairPrice: 500, disturbed: false },
    { productCapacity: 2000, price: 150000, amortization: 5, repairPrice: 500, disturbed: false },
    { productCapacity: 2000, price: 150000, amortization: 5, repairPrice: 500, disturbed: false },
    { productCapacity: 2000, price: 150000, amortization: 5, repairPrice: 500, disturbed: false },
    { productCapacity: 2000, price: 150000, amortization: 5, repairPrice: 500, disturbed: false },
    { productCapacity: 2000, price: 150000, amortization: 5, repairPrice: 500, disturbed: false },
    { productCapacity: 2000, price: 150000, amortization: 5, repairPrice: 500, disturbed: false },
    { productCapacity: 2000, price: 150000, amortization: 5, repairPrice: 500, disturbed: false },
    { productCapacity: 2000, price: 150000, amortization: 5, repairPrice: 500, disturbed: false }
  ],
  companyProduct: [
    {
      minPrice: 8.5, maxPrice: 20, productTime: 0.05,
      potentialSell: 250000, unitaryCost: 4, typeEvolution: "B",
      nbAttracts: 6,
      attracts: [
        {name: "Prix", sensibility: 40, type: "a"},
        {name: "Publicity", sensibility: 25, type: "a"},
        {name: "Force de Vente", sensibility: 12.5, type: "a"},
        {name: "Action Commercial", sensibility: 12.5, type: "a"},
        {name: "Recherche en Qualité", sensibility: 5, type: "a"},
        {name: "Credit Client", sensibility: 5, type: "a"}
      ],
      loyalty: 40
    },
    {
      minPrice: 200, maxPrice: 400, productTime: 1.5,
      potentialSell: 18000, unitaryCost: 0, typeEvolution: "B",
      nbAttracts: 6,
      attracts: [
        {name: "Prix", sensibility: 40, type: "a"},
        {name: "Publicity", sensibility: 25, type: "a"},
        {name: "Force de Vente", sensibility: 12.5, type: "a"},
        {name: "Action Commercial", sensibility: 12.5, type: "a"},
        {name: "Recherche en Qualité", sensibility: 5, type: "a"},
        {name: "Credit Client", sensibility: 5, type: "a"}
      ],
      loyalty: 50
    }
  ],
  employeesList: []
}
