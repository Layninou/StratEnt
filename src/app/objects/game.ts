import { Employee } from '../objects/salary';
import { Company }  from '../objects/company';
import { Product }  from '../objects/product';
import { Politic }  from '../objects/politic';
import { Studies }   from '../objects/studies';
import { Result }   from '../objects/result';

export class Game{
  round: number;
  nbDecision?: boolean[];
  teams: Company[];
  allProduct: Product[];
  politic: Politic;
  studies: Studies;
  result?: Result;
}
