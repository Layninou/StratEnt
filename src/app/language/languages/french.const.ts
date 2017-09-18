import { Language } from '../language';

export const FRENCH : Language = {

  //Principale

  //header
  principalHeaderTitle: "0",
  principalHaderSession: "session",
  principalHeaderPlace: "à",

  //navigator
  principalNavigatorIntroduction: "Initialisation",
  principalNavigatorCompanies: "Entreprises:",
  principalNavigatorCompaniesName: "Entreprise",
  principalNavigatorCompaniesDecision: "Décision",
  principalNavigatorCompaniesSituation: "Situation",
  principalNavigatorCompaniesComptability: "Comptabilité",
  principalNavigatorCompaniesFlux: "Bilan",
  principalNavigatorCompaniesStudies: "Etudes",
  principalNavigatorPeriode: "Changer de Période",
  principalNavigatorLog: "Fermer la Session",

  //Authentification
  authName: "Animateur",
  authPlace: "Lieu",
  authDate: "Date",
  authButton: "Créer",
  authOther: "Autres Sessions",

  //Initialization
  initTitle: "Initialisation de la Simulation",
  initButton: "Lancer la simulation",

  //game
  initGameTitle: "Jeu",
  initGameCompany: "Nombre d'Entreprises",
  initGameProduct: "Nombre de Produits",

  //scenario
  initScenarioTitle: "Scénario",

  //Companies
  initCompaniesTitle: "Entreprises",
  initCompaniesName: "Nom de l'Entreprise",
  initCompaniesCapital: "Capital Social",
  initCompaniesMachinery: "Nombre de Machine",
  initCompaniesAll: "Toutes les Entreprises",
  initCompaniesNamePlaceholder: "Entreprise",

  //politic
  initPoliticTitle: "Politique de la Simulation",
  initPoliticSupp: "Suppléments",
  initPoliticSuppTime: "Heures Supplémentaires",
  initPoliticSuppCost: "Surcoût",
  initPoliticSalary: "Salaires",
  initPoliticSalaryProductor: "Producteur",
  initPoliticSalarySellor: "Vendeur",
  initPoliticSalaryManager: "Cadre",
  initPoliticSalaryHire: "Coût du licenciement",
  initPoliticSalaryFire: "Coût d'embauche",
  initPoliticSalaryFormation: "Formation minimal",
  initPoliticRate: "Taux",
  initPoliticRateBorrowing: "Emprunt",
  initPoliticRateOverdraft: "Découvert Authorisé",
  initPoliticRateNonOverdraft: "Découvert Non Authorisé",
  initPoliticRateAuthorization: "Montant du Découvert Authorisé",
  initPoliticRatePlacement: "Placement",
  initPoliticRateVAT: "TVA",
  initPoliticRateTax: "Impots Sociétés",
  initPoliticRateCredit: "Crédit Fournisseurs",
  initPoliticCapacity: "Capacité de Production",
  initPoliticCapacityMachinery: "Heures Possible de Production par Machine",
  initPoliticCapacityProductor: "Heures Possible de Production par Producteur",
  initPoliticMachinery: "Type de Machine",
  initPoliticMachineryPrice: "Prix d'une Machine",
  initPoliticMachineryAmortization: "Amortissement d'une Machine",
  initPoliticMachineryReparation: "Prix de réparation d'une Machine",
  initPoliticCost: "Coûts Généraux",
  initPoliticCostStockage: "Prix du Stockage",
  initPoliticCostFix: "Coûts Fixes",
  initPoliticCostSlice: "Tranches d'immobilisation",
  initPoliticCostSupp: "Supplément de coûts fixe par tranche",
  initPoliticCostInsurance: "Prix de l'assurance",

  //product
  initProductTitle: "Produits",
  initProductNames: "Produits",
  initProductName: "Produit",
  initProductPotential: "Demande Potentiel par Entreprise",
  initProductEvolution: "Evolution de la demande",
  initProductEvolutionCD: "Croissante / Décroissante",
  initProductEvolutionExpo: "Exponentielle",
  initProductEvolutionRandom: "Aléatoire",
  initProductEvolutionTotalRandom: "Totalement Aléatoire",
  initProductTime: "Temps de Production",
  initProductCost: "Prix Unitaire de production",
  initProductMin: "Prix Minimum de vente",
  initProductMax: "Prix Maximum de vente",

  //affinity
  initAffinityTitle: "Affinité du Produit",
  initAffinityNumber: "Nombre de poids sensibilisant le consommateur",
  initAffinityName: "Nom de l'affinité",
  initAffinityWeight: "Importance",
  initAffinityType: "Type",
  initAffinityTypePrice: "Prix",
  initAffinityTypePublicity: "Publicité",
  initAffinityTypeRD: "Recherche et Développement",
  initAffinityTypeCredit: "Crédit",
  initAffinityTypeSellor: "Force de Vente",
  initAffinityTypeMarketing: "Action Commercial",
  initAffinityFidelity: "Fidélité",

  //Studies
  initStudiesTitle: "Etudes",
  initStudiesProduct: "produit",
  initStudiesPart: "Parts de Marché",
  initStudiesResult: "Résultats",
  initStudiesStructure: "Structure Financière",
  initStudiesMarket: "Situation du marché",
  initStudiesPerformance: "Performance de l'Entreprise",

  //Decision
  decTitle: "Décision",
  decCompanyName: "Entreprise",
  decPeriode: "Période",
  decButton: "Sauvegarder la Décision",

  //Decision General
  decGeneralDecision: "Décisions Générales",

  //Financial Structure
  decFinancialStructureTitle: "Structure Financière",
  decFinancialStructureVarCap: "Variation de Capital",
  decFinancialStructureDistribution: "Distributions",
  decFinancialStructureVarBorrow: "Variation d'emprunt",
  decFinancialStructureSubvention: "Subventions",
  decFinancialStructureEx: "Produits ou Charges Ex",

  //Machinery
  decMachineryTitle: "Machinerie",
  decMachineryNumber: "Nombre de Machines",
  decMachineryAdd: "Achats",
  decMachineryDel: "Ventes",
  decMachineryRepair: "Entretien",

  //Decision Product
  decProduct: "Décisions Produits",

  //Fabrication
  decFabricationTitle: "Fabrication",
  decFabricationNames: "Nom du Produit",
  decFabricationName: "Produit",
  decFabricationProduction: "Production",
  decFabricationMachinery: "Machines Affectées",
  decFabricationProductor: "Producteurs Affectés",

  //Marketing
  decMarketingTitle: "Commercialisation",
  decMarketingType: "Type de Produit",
  decMarketingName: "Produit",
  decMarketingPrice: "Prix",
  decMarketingPublicity: "Publicité",
  decMarketingSellor: "Force de Vente",
  decMarketingAction: "Action Commercial",
  decMarketingRD: "Recherche et Developpement",
  decMarketingCredit: "Crédit Client",

  //Decision Human Ressource
  decHR: "Ressources Humaines",

  //Remuneration
  decRemunerationTitle: "Rémunération",
  decRemunerationSalary: "Indice des salaires",
  decRemunerationCommission: "Commissions aux vendeurs",
  decRemunerationBudget: "Budget Formation",

  //Employees
  decEmployeesTitle: "Employees",
  decEmployeesProductor: "Producteurs",
  decEmployeesSellor: "Vendeurs",
  decEmployeesManager: "Cadres",
  decEmployeesHire: "Embauche",
  decEmployeesFire: "Licenciement",

  //Decision Studies
  decStudiesTitle: "Etudes de Marchés",
  decStudiesProduct: "Produit",
  decStudiesMarketPart: "Part de Marché",
  decStudiesResult: "Résultats",
  decStudiesFinancialStructure: "Structure Financière",
  decStudiesMarketSituation: "Situation du Marché",
  decStudiesPerformance: "Performance de l'entreprise",

  //Decision Exceptionnal
  decExceptionalTitle: "Décisions Exceptionnelles",

  //Storage
  decStorageTitle: "Liquidation des stocks",
  decStorageNames: "Nom du Produit",
  decStorageName: "Produit",
  decStorageQuantity: "Quantité",

  //Exceptionnal
  decExceptionalFabricationTitle: "Fabrication Exceptionnelle",
  decExceptionalFabricationNames: "Nom du Produit",
  decExceptionalFabricationName: "Produit",
  decExceptionalFabricationQuantity: "Quantité",
  decExceptionalFabricationPrice: "Prix",

  //Situation
  situTitle: "Situation",
  situCompany: "Entreprise",
  situPeriode: "Période",

  //Situation Structure
  situStructureTitle: "Structure de l'Entreprise",
  situStructureOldPeriode: "Fin de la période précédante",
  situStructureNewPeriode: "Fin de cette période",
  situStructureCapacity: "Capacité productive (heures)",
  situStructureNumber: "Nombre de produits",
  situStructureStorage: "Stock (en valeur)",
  situStructureProductor: "Effectifs: Producteurs",
  situStructureSellor: "Effectifs: Vendeurs",
  situStructureManager: "Effectifs: Cadre",
  situStructureDebt: "Créances Clients",
  situStructureBreakdown: "Pannes",
  situStructureStrike: "Grèves",

  //Situation Decision
  situDecisionTitle: "Décisions d'Exploitation",
  situDecisionName: "Produit",
  situDecisionAffected: "Machines Affectées",
  situDecisionPercentAffected: "Pourcentage de Machines Affectées",
  situDecisionProductor: "Producteurs Affectés",
  situDecisionProduction: "Production Prévue",
  situDecisionFabricationTime: "Temps de Fabrication du composant",
  situDecisionPrice: "Prix",
  situDecisionPublicity: "Publicité",
  situDecisionSellor: "Force de Vente",
  situDecisionAction: "Action Commercial",
  situDecisionRD: "Recherche en Qualité",
  situDecisionCredit: "Crédit Client",

  //Situation Result
  situResultTitle: "Résultats",
  situResultName: "Produit",
  situResultRealProduction: "Production Réelle",
  situResultUseMachine: "Taux d'utilisation machines",
  situResultOvertime: "Heures Supplémentaires",
  situResultSellNormal: "Ventes Normales (quantité)",
  situResultSellStorage: "Ventes Soldées (quantité)",
  situResultSellSpecial: "Ventes Speciales (quantité)",
  situResultTurnover: "Chiffre d'affaires",
  situResultMarketPart: "Parts de marché",
  situResultStorageQuantity: "Stock (quantité)",
  situResultStorageValue: "Stock (valeur)",

  //Comptability
  comptaTitle: "Comptes de Résultats",
  comptaCompany: "Entreprise",
  comptaPeriode: "Période",

  //Comptability Storage
  comptaStorageTitle: "Produits d'Exploitation",
  comptaStorageName: "Produit",
  comptaStorageTotal: "Total",
  comptaStorageSoldNormal: "Production vendue",
  comptaStorageSoldStorage: "Production soldée",
  comptaStorageSoldSpecial: "Production offre spéciale",
  comptaStorageStorageValue: "Production stockée",
  comptaStorageSubvention: "Subventions",

  //Comptability Charges
  comptaChargesTitle: "Charges d'Exploitation",
  comptaChargesName: "Produit",
  comptaChargesTotal: "Total",
  comptaChargesConso: "Consommation matières",
  comptaChargesWorkforce: "Main d'Oeuvre Directe",
  comptaChargesRD: "Coût de la qualité",
  comptaChargesPublicity: "Publicité",
  comptaChargesActionMarketing: "Action Commerciale",
  comptaChargesSellorRemuneration: "Rémunération de la Force de Vente",
  comptaChargesStorageCost: "Coût de Stockage",
  comptaChargesDotation: "Dotation aux amortissements",
  comptaChargesRemuneration: "Rémunération de l'encadrement",
  comptaChargesHireCost: "Coût d'embauche",
  comptaChargesFireCost: "Coût de licenciement",
  comptaChargesFormationCost: "Coût de formation",
  comptaChargesFixCostProduction: "Coût fixes de production",
  comptaChargesRepairCost: "Coût des réparations",
  comptaChargesServicing: "Coût d'entretien des machines",
  comptaChargesInsurance: "Primes d'assurances",
  comptaChargesStudiesCost: "Coût des études",

  //Comptability Financial
  comptaFinancialTitle: "Résultats Financiers",
  comptaFinancialProduct: "Produits Financiers",
  comptaFinancialCharges: "Charge Financières",

  //Comptability Final
  comptaFinalTitle: "Résultats",
  comptaFinalExploitation: "Résultats d'Exploitation",
  comptaFinalFinance: "Résultats Financiers",
  comptaFinalExceptionnalProduct: "Résultats Exceptionnels (produits)",
  comptaFinalExceptionnalCharges: "Résultats Exceptionnels (charges)",
  comptaFinalInsurance: "Remboursement assurances",
  comptaFinalBeforeTax: "Résultats avant impôts",
  comptaFinalTax: "impôt sur les sociétés",
  comptaFinalNetResult: "Résultats Net",

  //Flux
  fluxTitle: "Bilan",
  fluxCompany: "Entreprise",
  fluxPeriode: "Période",

  //Flux Assets
  fluxAssetsTitle: "Emplois Principaux (Actif)",
  fluxAssetsImmo: "Actif Immobilisé",
  fluxAssetsImmoTools: "Outillage",
  fluxAssetsImmoAmortization: "Amortissement",
  fluxAssetsMove: "Actif Circulant",
  fluxAssetsMoveStorage: "Stock Produits Finis",
  fluxAssetsMoveClient: "Clients",
  fluxAssetsMoveBank: "Banque",
  fluxAssetsTotal: "Total de l'Actif",

  //Flux Liabilities
  fluxLiabilitiesTitle: "Finances par (Passif)",
  fluxLiabilitiesImmo: "Ressources Immobilisé",
  fluxLiabilitiesImmoCapital: "Capital Social",
  fluxLiabilitiesImmoReserve: "Reserves / Report",
  fluxLiabilitiesImmoResult: "Résultats de l'exercice",
  fluxLiabilitiesMove: "Ressources Circulant",
  fluxLiabilitiesMoveBorrow: "Emprunts",
  fluxLiabilitiesMoveBank: "Concours Bancaires",
  fluxLiabilitiesMoveProvider: "Fournisseurs",
  fluxLiabilitiesMoveDebt: "Dettes Fiscales",
  fluxLiabilitiesTotal: "Total du Passif",

  //Studies
  studiesTitle: "Etudes",
  studiesCompany: "Entreprise",
  studiesPeriode: "Période",

  //Studies Product
  studiesProductTitle: "Politiques des Concurrents sur le Produit",
  studiesProductPrice: "Prix",
  studiesProductPublicity: "Publicité",
  studiesProductAction: "Action Commerciale",
  studiesProductSellor: "Force de Vente",
  studiesProductCredit: "Crédit Client",

  //Studies Market Part
  studiesMPTitle: "Parts de marché des concurrents sur les produits",
  studiesMPProd: "Produit",

  //Studies Concurrence
  studiesConcuTitle: "Résultats des concurrents",
  studiesConcuFiscal: "Résultat Fiscal",
  studiesConcuNet: "Résultat Net",
  studiesConcuProduct: "Produit",
  studiesConcuTurnover: "CA",

  //Studies Structures
  studiesStructTitle: "Structure des entreprises concurrentes",
  studiesStructCapital: "Capital Propre",
  studiesStructImmo: "immobilisation",
  studiesStructStorage: "Valeur des Stocks",
  studiesStructInDebt: "Endettement",
  studiesStructOverdraft: "Découvert",
  studiesStructOvertimeProd: "HS (%) Produit",

  //Studies Market Situation
  studiesMSTitle: "Situation du marché",
  studiesMSPotential: "Demande Potentielle",
  studiesMSEffective: "Demande Effective",

  //Studies Performance
  studiesPerformanceTitle: "Performance de l'entreprise",
  studiesPerformanceNameProduct: "Produit",
  studiesPerformancePrice: "Prix",
  studiesPerformancePublicity: "Publicité",
  studiesPerformanceAction: "Action Commerciale",
  studiesPerformanceSellor: "Force de Vente",
  studiesPerformanceCredit: "Crédit",

  //Periode Changement
  periodeChangeCreation: "Création de Résultats",
  periodeChangeRound: "Cette Simulation est à la période",
  periodeChangeButton: "Changer de Période"

}
