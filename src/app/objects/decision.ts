import { FinancialDecision } from './decision/financial';
import { MachineFlux } from './decision/machine-flux';
import { Production } from './decision/production';
import { Marketing } from './decision/marketing';
import { Remuneration } from './decision/remuneration';
import { HireFire } from './decision/hire-fire';
import { Studies } from './decision/studies';
import { Exceptionnal } from './decision/exceptionnal';

export class Decision{

  //General Decision (Financial and Machine)
  financialDecision: FinancialDecision;
  machineFlux: MachineFlux;

  //Product Decision (Fabrication and Marketing)
  productionDecision: Production;
  marketingDecision: Marketing[];

  //Human Ressources (Remuneration and HireFire)
  remuneration: Remuneration;
  hireFire: HireFire[];

  //Studies
  studies: Studies;

  //Exceptionnal Decision (Stock and Soumissions)
  liquidation: number[];
  exceptionnal?: Exceptionnal;

}
