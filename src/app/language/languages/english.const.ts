import { Language } from '../language';

export const ENGLISH : Language = {

  //Principale

  //header
  principalHeaderTitle: "0",
  principalHaderSession: "session",
  principalHeaderPlace: "at",

  //navigator
  principalNavigatorIntroduction: "Initialization",
  principalNavigatorCompanies: "Companies:",
  principalNavigatorCompaniesName: "Company",
  principalNavigatorCompaniesDecision: "Decision",
  principalNavigatorCompaniesSituation: "Situation",
  principalNavigatorCompaniesComptability: "Comptability",
  principalNavigatorCompaniesFlux: "Flux",
  principalNavigatorCompaniesStudies: "Studies",
  principalNavigatorPeriode: "Change Periode",
  principalNavigatorLog: "Log Out",

  //Authentification
  authName: "Animator",
  authPlace: "Place",
  authDate: "Date",
  authButton: "Create",
  authOther: "Other Sessions",

  //Initialization
  initTitle: "Initialization of the Simulation",
  initButton: "Start the simulation",

  //game
  initGameTitle: "Game",
  initGameCompany: "Number of Teams",
  initGameProduct: "Number of Products",

  //scenario
  initScenarioTitle: "Scenario",

  //Companies
  initCompaniesTitle: "Companies",
  initCompaniesName: "Name of the Company",
  initCompaniesCapital: "Social Capital",
  initCompaniesMachinery: "Machinery",
  initCompaniesAll: "All Companies",
  initCompaniesNamePlaceholder: "Company",

  //politic
  initPoliticTitle: "Politics in the Simulation",
  initPoliticSupp: "Extra",
  initPoliticSuppTime: "Overtime",
  initPoliticSuppCost: "Overcost",
  initPoliticSalary: "Salary",
  initPoliticSalaryProductor: "Productor",
  initPoliticSalarySellor: "Seller",
  initPoliticSalaryManager: "Manager",
  initPoliticSalaryHire: "Hire Cost",
  initPoliticSalaryFire: "Fire Cost",
  initPoliticSalaryFormation: "Formation Cost",
  initPoliticRate: "Rate",
  initPoliticRateBorrowing: "Borrowing",
  initPoliticRateOverdraft: "Overdraft",
  initPoliticRateNonOverdraft: "Unauthorized Overdraft",
  initPoliticRateAuthorization: "Overdraft Amount",
  initPoliticRatePlacement: "Placement",
  initPoliticRateVAT: "VAT",
  initPoliticRateTax: "Society Tax",
  initPoliticRateCredit: "Supplier Credit",
  initPoliticCapacity: "Production Capacity",
  initPoliticCapacityMachinery: "Possible Production Hours per Machine",
  initPoliticCapacityProductor: "Possible Production Hours per Productor",
  initPoliticMachinery: "Machine Type",
  initPoliticMachineryPrice: "Machine Price",
  initPoliticMachineryAmortization: "Amortization",
  initPoliticMachineryReparation: "Repair Cost",
  initPoliticCost: "General Cost",
  initPoliticCostStockage: "Storage Cost",
  initPoliticCostFix: "Fix Cost",
  initPoliticCostSlice: "Immobilization Slice",
  initPoliticCostSupp: "Add Cost per Slice",
  initPoliticCostInsurance: "Insurance Cost",

  //product
  initProductTitle: "Products",
  initProductNames: "Products",
  initProductName: "Product",
  initProductPotential: "Potential Demand per Company",
  initProductEvolution: "Evolution of the Demand",
  initProductEvolutionCD: "Increasing / Decreasing",
  initProductEvolutionExpo: "Exponential",
  initProductEvolutionRandom: "Random",
  initProductEvolutionTotalRandom: "Totally Random",
  initProductTime: "Production Time",
  initProductCost: "Unit Price of Production",
  initProductMin: "Minimum Price of Selling",
  initProductMax: "Maximum Price of Selling",

  //affinity
  initAffinityTitle: "Affinity of the Product",
  initAffinityNumber: "Number of Weight",
  initAffinityName: "Affinity Name",
  initAffinityWeight: "Weight",
  initAffinityType: "Type",
  initAffinityTypePrice: "Price",
  initAffinityTypePublicity: "Publicity",
  initAffinityTypeRD: "Research and Development",
  initAffinityTypeCredit: "Credit",
  initAffinityTypeSellor: "Seller Force",
  initAffinityTypeMarketing: "Commercial Action",
  initAffinityFidelity: "Fidelity",

  //Studies
  initStudiesTitle: "Studies",
  initStudiesProduct: "product",
  initStudiesPart: "Market Part",
  initStudiesResult: "Result",
  initStudiesStructure: "Financial Structure",
  initStudiesMarket: "Market Situation",
  initStudiesPerformance: "Enterprise Performance",

  //Decision
  decTitle: "Decision",
  decCompanyName: "Company",
  decPeriode: "Round",
  decButton: "Save Change",

  //Decision General
  decGeneralDecision: "General Decisions",

  //Financial Structure
  decFinancialStructureTitle: "Financial Structure",
  decFinancialStructureVarCap: "Assets Variation",
  decFinancialStructureDistribution: "Distributions",
  decFinancialStructureVarBorrow: "Borrowing Variation",
  decFinancialStructureSubvention: "Subventions",
  decFinancialStructureEx: "External Products or Charges",

  //Machinery
  decMachineryTitle: "Machinery",
  decMachineryNumber: "Machine Number",
  decMachineryAdd: "Buy",
  decMachineryDel: "Sell",
  decMachineryRepair: "Maintenance",

  //Decision Product
  decProduct: "Product Decisions",

  //Fabrication
  decFabricationTitle: "Manufacturing",
  decFabricationNames: "Product Name",
  decFabricationName: "Product",
  decFabricationProduction: "Production",
  decFabricationMachinery: "Affected Machine",
  decFabricationProductor: "Affected Productor",

  //Marketing
  decMarketingTitle: "Commercialization",
  decMarketingType: "Product Type",
  decMarketingName: "Product",
  decMarketingPrice: "Price",
  decMarketingPublicity: "Publicity",
  decMarketingSellor: "Seller Force",
  decMarketingAction: "Marketing Action",
  decMarketingRD: "Recherhce and Development",
  decMarketingCredit: "Client Credit",

  //Decision Human Ressource
  decHR: "Human Ressource",

  //Remuneration
  decRemunerationTitle: "Remuneration",
  decRemunerationSalary: "Wage Index",
  decRemunerationCommission: "Sellers Commissions",
  decRemunerationBudget: "Budget Formation",

  //Employees
  decEmployeesTitle: "Staff",
  decEmployeesProductor: "Productor",
  decEmployeesSellor: "Seller",
  decEmployeesManager: "Manager",
  decEmployeesHire: "Hire",
  decEmployeesFire: "Fire",

  //Decision Studies
  decStudiesTitle: "Market Studies",
  decStudiesProduct: "Product",
  decStudiesMarketPart: "Market Part",
  decStudiesResult: "Result",
  decStudiesFinancialStructure: "Financial Structure",
  decStudiesMarketSituation: "Market Situation",
  decStudiesPerformance: "Company Performance",

  //Decision Exceptionnal
  decExceptionalTitle: "Exceptionnal Decisions",

  //Storage
  decStorageTitle: "Clearance",
  decStorageNames: "Product Name",
  decStorageName: "Product",
  decStorageQuantity: "Quantity",

  //Exceptionnal
  decExceptionalFabricationTitle: "Exceptionnal Selling",
  decExceptionalFabricationNames: "Product Name",
  decExceptionalFabricationName: "Product",
  decExceptionalFabricationQuantity: "Quantity",
  decExceptionalFabricationPrice: "Price",

  //Situation
  situTitle: "Situation",
  situCompany: "Company",
  situPeriode: "Round",

  //Situation Structure
  situStructureTitle: "Company Structure",
  situStructureOldPeriode: "Old Round",
  situStructureNewPeriode: "New Round",
  situStructureCapacity: "Production Capacity (hours)",
  situStructureNumber: "Number of Products",
  situStructureStorage: "Stock (value)",
  situStructureProductor: "Productor Workforce",
  situStructureSellor: "Vendor Workforce",
  situStructureManager: "Manager Workforce",
  situStructureDebt: "Client Debt",
  situStructureBreakdown: "Breakdown",
  situStructureStrike: "Strike",

  //Situation Decision
  situDecisionTitle: "Exploitation Decision",
  situDecisionName: "Product",
  situDecisionAffected: "Affected Machines",
  situDecisionPercentAffected: "Percent of Affected Machines",
  situDecisionProductor: "Afftected Productors",
  situDecisionProduction: "Planned Production",
  situDecisionFabricationTime: "Fabrication Time",
  situDecisionPrice: "Price",
  situDecisionPublicity: "Publicity",
  situDecisionSellor: "Seller Force",
  situDecisionAction: "Marketing Action",
  situDecisionRD: "Recherche and Development",
  situDecisionCredit: "Credit",

  //Situation Result
  situResultTitle: "Results",
  situResultName: "Product",
  situResultRealProduction: "Real Production",
  situResultUseMachine: "Machines uses",
  situResultOvertime: "Overtime",
  situResultSellNormal: "Normal Selling (quantity)",
  situResultSellStorage: "Clearing Selling (quantity)",
  situResultSellSpecial: "Special Selling (quantity)",
  situResultTurnover: "Turnover",
  situResultMarketPart: "Market Part",
  situResultStorageQuantity: "Storage (quantity)",
  situResultStorageValue: "Storage (value)",

  //Comptability
  comptaTitle: "Comptability",
  comptaCompany: "Company",
  comptaPeriode: "Round",

  //Comptability Storage
  comptaStorageTitle: "Exploitation Produce",
  comptaStorageName: "Product",
  comptaStorageTotal: "Total",
  comptaStorageSoldNormal: "Normal Selling",
  comptaStorageSoldStorage: "Clearing Selling",
  comptaStorageSoldSpecial: "Special Selling",
  comptaStorageStorageValue: "Storage Value",
  comptaStorageSubvention: "Subventions",

  //Comptability Charges
  comptaChargesTitle: "Exploitation Charges",
  comptaChargesName: "Product",
  comptaChargesTotal: "Total",
  comptaChargesConso: "Consumption of Material",
  comptaChargesWorkforce: "Direct Workforce",
  comptaChargesRD: "Recherche and Development",
  comptaChargesPublicity: "Publicity",
  comptaChargesActionMarketing: "Marketing Action",
  comptaChargesSellorRemuneration: "Vendeur Remuneration",
  comptaChargesStorageCost: "Storage Cost",
  comptaChargesDotation: "Amortization Dotation",
  comptaChargesRemuneration: "Management Remuneration",
  comptaChargesHireCost: "Hire Cost",
  comptaChargesFireCost: "Fire Cost",
  comptaChargesFormationCost: "Formation Cost",
  comptaChargesFixCostProduction: "Fix Cost of Production",
  comptaChargesRepairCost: "Repair Cost",
  comptaChargesServicing: "Servicing",
  comptaChargesInsurance: "Insurance Premium",
  comptaChargesStudiesCost: "Studies Cost",

  //Comptability Financial
  comptaFinancialTitle: "Financial Result",
  comptaFinancialProduct: "Financial Products",
  comptaFinancialCharges: "Financial Charges",

  //Comptability Final
  comptaFinalTitle: "Result",
  comptaFinalExploitation: "Exploitation Result",
  comptaFinalFinance: "Fiancial Result",
  comptaFinalExceptionnalProduct: "Exceptionnal Result (product)",
  comptaFinalExceptionnalCharges: "Exceptionnal Result (charge)",
  comptaFinalInsurance: "Insurance Refund",
  comptaFinalBeforeTax: "Result before Taxes",
  comptaFinalTax: "Society Tax",
  comptaFinalNetResult: "Net Result",

  //Flux
  fluxTitle: "Flux",
  fluxCompany: "Company",
  fluxPeriode: "Round",

  //Flux Assets
  fluxAssetsTitle: "Assets",
  fluxAssetsImmo: "Fixed Assets",
  fluxAssetsImmoTools: "Tools",
  fluxAssetsImmoAmortization: "Amortization",
  fluxAssetsMove: "Flowed Assets",
  fluxAssetsMoveStorage: "Storage",
  fluxAssetsMoveClient: "Client",
  fluxAssetsMoveBank: "Bank",
  fluxAssetsTotal: "Total Assets",

  //Flux Liabilities
  fluxLiabilitiesTitle: "Liabilities",
  fluxLiabilitiesImmo: "Fixed Liabilities",
  fluxLiabilitiesImmoCapital: "Share Capital",
  fluxLiabilitiesImmoReserve: "Supply",
  fluxLiabilitiesImmoResult: "Result of the Round",
  fluxLiabilitiesMove: "Flowed Liabilities",
  fluxLiabilitiesMoveBorrow: "Borrowing",
  fluxLiabilitiesMoveBank: "Bank",
  fluxLiabilitiesMoveProvider: "Provider",
  fluxLiabilitiesMoveDebt: "Fiscal Debt",
  fluxLiabilitiesTotal: "Total Liabilities",

  //Studies
  studiesTitle: "Studies",
  studiesCompany: "Company",
  studiesPeriode: "Round",

  //Studies Product
  studiesProductTitle: "Competitor Politics on the Product",
  studiesProductPrice: "Price",
  studiesProductPublicity: "Publicity",
  studiesProductAction: "Marketing Action",
  studiesProductSellor: "Vendor",
  studiesProductCredit: "Credit",

  //Studies Market Part
  studiesMPTitle: "Market Parts of the Concurrence",
  studiesMPProd: "Product",

  //Studies Concurrence
  studiesConcuTitle: "Concurrence Results",
  studiesConcuFiscal: "Fiscal Result",
  studiesConcuNet: "Net Result",
  studiesConcuProduct: "Product",
  studiesConcuTurnover: "Turnover",

  //Studies Structures
  studiesStructTitle: "Structure of the Companies",
  studiesStructCapital: "Share Capital",
  studiesStructImmo: "Immobilization",
  studiesStructStorage: "Storage Value",
  studiesStructInDebt: "Indebtedness",
  studiesStructOverdraft: "Overdraft",
  studiesStructOvertimeProd: "Overtime (%) of Product",

  //Studies Market Situation
  studiesMSTitle: "Situation of the Market",
  studiesMSPotential: "Potential Demand",
  studiesMSEffective: "Effective Demand",

  //Studies Performance
  studiesPerformanceTitle: "Company Performance",
  studiesPerformanceNameProduct: "Product",
  studiesPerformancePrice: "Price",
  studiesPerformancePublicity: "Publicity",
  studiesPerformanceAction: "Marketing Action",
  studiesPerformanceSellor: "Sellor Workforce",
  studiesPerformanceCredit: "Credit",

  //Periode Changement
  periodeChangeCreation: "Create Result",
  periodeChangeRound: "This simulation is at round",
  periodeChangeButton: "Change Round"

}
