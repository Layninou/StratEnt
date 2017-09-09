import { Decision } from '../objects/decision';

export const DECISION: Decision = {
  //General Decision (Financial and Machine)
  financialDecision: {
    variateCaptial : 0,
    distribution   : 0,
    variateLoaning : 0,
    subventions    : 0,
    exonerate      : 0
  },
  machineFlux: {
    buyMachine  : 0,
    sellMachine : 0,
    maintenance : 0,
  },

  //Product Decision (Fabrication and Marketing)
  productionDecision: {
    production        : [],
    affectedMachine   : [],
    affectedProductor : [],
  },
  marketingDecision: [],

  //Human Ressources (Remuneration and HireFire)
  remuneration: {
    wageIndex       : 0,
    commission      : 0,
    formationBudget : 0,
  },
  hireFire: [],

  //Studies
  studies: {
    productStudies: [],
    market        : false,
    result        : false,
    finance       : false,
    situation     : false,
    performance   : false,
  },

  //Exceptionnal Decision (Stock and Soumissions)
  liquidation: [],
  // exceptionnal: { exceptionnalSelling: [], exceptionnalPrice: []}
}
