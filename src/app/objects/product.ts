import { Attract } from './attract';

export class Product {
  minPrice: number;
  maxPrice: number;
  productTime: number;
  potentialSell: number;
  unitaryCost: number;
  typeEvolution: string;

  nbAttracts: number;
  attracts: Attract[];
  loyalty: number;
}
