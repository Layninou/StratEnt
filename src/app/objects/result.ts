import { Situation }    from './result/situation';
import { Choice }       from './result/choice';
import { Structure }    from './result/structure';

import { Exploitation } from './result/exploitation';
import { Charges }      from './result/charges';
import { Finances }     from './result/finance';
import { Exceptional }  from './result/exceptional';

import { Exercice }     from './result/exercice';

import { Flux }         from './result/flux';

export class Result{

  //General of the result
  potentialRoundSell?: number[];
  effectiveRoundSell?: number[];
  nonEffectiveMarket?: any[];

  //Situation
  situationProduct: Situation[];
  choiceProduct: Choice[];
  structureCompany: Structure;

  //Comptability
  productsExploitation: Exploitation[];
  productsCharges: Charges[];
  finances: Finances;
  exceptional: Exceptional;

  //Excercice Result
  exercice: Exercice;

  //Flux
  flux: Flux;
}
