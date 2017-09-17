import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

//Language
import { Language } from '../language/language';
import { LanguageService } from '../language/language.service';

  //Object
import { Game } from '../objects/game';

  //Constant
import { NULL_GAME } from '../constant/init-Game.const';

  //Service
import { ResultService } from '../service/result.service';
  //Firebase
import { DbFirebaseService } from '../firebase/db-firebase.service';

@Component({
  selector: 'app-create-result',
  templateUrl: './create-result.component.html',
  styleUrls: ['./create-result.component.css']
})
export class CreateResultComponent implements OnInit, OnChanges {

  game: Game;
  lang: Language;
  round: number;
  disability: boolean;
  teamsName: any[];
  teamsBool: any;
  teamsKey: any[];

  constructor( private rServ: ResultService, private dbLink: DbFirebaseService, private langServ: LanguageService) {
    this.disability = true;
    this.game = NULL_GAME;

    this.lang = langServ.getLanguageConstructor();
    langServ.getLanguage().subscribe( lang => this.lang = lang );
  }

  ngOnInit() {

    var numberTeam = 0;
    var numberDec  = 0;
    this.game = this.rServ.getGame();
    this.round = this.rServ.getRound();
    console.log("the game in the change periode component");
    console.log(this.game);

    //Teams
    this.teamsKey = [];
    this.teamsName = [];
    Object.keys(this.game.teams).map( (key) => {
      numberTeam++;
      this.teamsName.push(this.game.teams[key].name);
      this.teamsKey.push(key);
    });
    this.teamsBool = this.teamsKey.reduce( (o, key) => Object.assign(o, {[key]: false}), {});


    //Disability on/off and Who has decide
    if( this.game.nbDecision !== undefined){
      Object.keys(this.game.nbDecision).map( (boolDec) => {
        if(this.teamsBool.hasOwnProperty(boolDec)){
          this.teamsBool[boolDec] = true;
        }
        numberDec++
      });
    }

    if(numberTeam === numberDec){
      this.disability = !this.disability;
    }
  }

  ngOnChanges(change: SimpleChanges){
    this.ngOnInit();
  }

  createResult(): void {

    //TODO: stop console when it's work
    console.log("this is the game: ");
    console.log(this.game);
    console.log("round is: " + this.game.round);

    //TODO: add decision to result and push the new employee in the teams
    console.log(" ");
    console.log("BUYER PART:");
    console.log(" ");

      console.log("Creation of a potential selling by products: ");
    var noderesult = "result" + this.game.round;
    var potentials = this.rServ.createTheoricalPotential(this.game);
    potentials = potentials.map( (potential) => this.rServ.exponentialEvolution(potential, this.game.round));
    this.dbLink.updateObjectInFirebaseWithUrl( { potentialSell: potentials}, noderesult);
    console.log(potentials);

      console.log("Creation of a effective selling by products: ");
    var realPotentials = this.rServ.createRealPotential(potentials);
    this.dbLink.updateObjectInFirebaseWithUrl( { effectiveSell: realPotentials}, noderesult);
    console.log(realPotentials);

    console.log(" ");
    console.log("MODELIZATION PART: ");
    console.log(" ");

      console.log("init of the teams:")
    this.rServ.initNumberTeam(this.game);
    console.log(" ");

      console.log("repart the market:");
    var market = this.rServ.initAllTeamsOrdinatix(this.game);
    this.dbLink.updateObjectInFirebaseWithUrl( { market: market}, noderesult);
    market.map( (mar) => console.table(mar));
    console.log(" ");

      console.log("repart the selling");
    var repartition = this.rServ.repartBuyer(market, realPotentials);
    console.table(repartition);
    console.log(" ");

      console.log("we must hire and fire employees");
    var hireFireList = this.rServ.createAllHireFire(this.game);
    console.log("les nouvelles listes d'employees: ");
    console.log(hireFireList);

    hireFireList.map( (hireFire, indexTeam) => {
      var teamIndex = "team" + indexTeam + "/employeesList";
      this.dbLink.updateObjectInFirebaseWithUrl( { [teamIndex]: hireFire}, "teams");
    });
    console.log(" ");

      console.log("NOW: we will make the situations, charges, exploitations,... of all Company")
    //Situations
    var situationPack = this.rServ.makeAllSituations(repartition, this.game);

    //Choices
    var choicesPack = this.rServ.makeChoices(this.game);

    //Exploitations
    var exploitationPack = this.rServ.makeAllExploitations(repartition, this.game);
    var allExploitationPack = this.rServ.makeAllTotalExploitations(exploitationPack, this.game);

    //Charges
    var chargesPack = this.rServ.makeAllCharges(repartition, this.game);
    var allChargesPack = this.rServ.makeAllTotalCharges(chargesPack, this.game);

    //Finances
    var financesPack = this.rServ.makeAllFinance(this.game);

    //Exceptional
    var exceptionalPack = this.rServ.makeAllExceptional(this.game);

    //Exercices
    var exercicePack = this.rServ.makeAllExercice(this.game, allExploitationPack, allChargesPack);

    //Flux
    var fluxPack = this.rServ.makeAllFlux(this.game);

    //Resort
    var teamSituations = this.rServ.resortSituations(this.game, situationPack);
    var teamExploitations = this.rServ.resortExploitations(this.game, exploitationPack);
    var teamCharges = this.rServ.resortCharges(this.game, chargesPack);

    //Structure
    var turnovers = this.rServ.getAllTurnover(teamSituations);

    console.log(" ");
    var structuresPack = this.rServ.makeAllStructure(this.game, turnovers);
    console.log("structures:")
    console.log(structuresPack)

    //Machinery
    var machineryList = this.rServ.createAllNewMachinery(this.game);

    // console.log("les nouvelles listes de machineries: ");
    // console.log(machineryList);

    // console.log(" ");
    machineryList.map( (machinery, indexTeam) => {
      // console.log("Machinerie pour la team " + indexTeam);
      // console.log(machinery);
      var teamIndex = "team" + indexTeam + "/companyMachinery";
      this.dbLink.updateObjectInFirebaseWithUrl( { [teamIndex]: machinery}, "teams");
    })

    console.log(" ");
    console.log("CREATION OF THE SITUATIONS: ");
    console.log(" ");

    // situationPack.map( (situations, index) => {
    //   console.log(" ");
    //   console.log("situations pour le produit " + index);
    //   console.table(situations);
    // });

    console.log(" ");
    console.log("CREATION OF THE EXPLOITATIONS: ");
    console.log(" ");

    exploitationPack.map( (exploitations, index) => {
      console.log(" ");
      console.log("exploitations pour le produit " + index);
      console.table(exploitations);
    });

    console.log(" ");
    console.log("CREATION OF THE CHARGES: ");
    console.log(" ");

    chargesPack.map( (charges, index) => {
      console.log(" ");
      console.log("charges pour le produit " + index);
      console.table(charges);
    });


    console.log(" ");
    console.log("CREATION OF THE ALL EXPLOITATION: ");
    console.table(allExploitationPack);

    console.log(" ");
    console.log("CREATION OF THE ALL CHARGES: ");
    console.table(allChargesPack);

    //TODO: make that a service, prépare to push in the database

    console.log(" ");
    console.log("team structures");
    console.log(structuresPack);
    structuresPack.map( (structure, index) => {
      console.log(" ");
      console.log("structure pour l'équipe " + index);
      console.log(structure);
      //TODO: Attention Round
      var indexResult = "result" + this.game.round;
      var teamResultIndex = "team" + index + "/structure";
      var teamIndex = "team" + index + "/result/" + indexResult + "/structure";
      this.dbLink.updateObjectInFirebaseWithUrl( { [teamResultIndex]: structure}, indexResult);
      this.dbLink.updateObjectInFirebaseWithUrl( { [teamIndex]: structure}, "teams");
    })

    console.log(" ");
    console.log("team situations");
    console.log(teamSituations);
    teamSituations.map( (situations, index) => {
      console.log(" ");
      console.log("situations pour l'équipe " + index);
      console.table(situations);
      //TODO: Attention Round
      var indexResult = "result" + this.game.round;
      var teamResultIndex = "team" + index + "/situation";
      var teamIndex = "team" + index + "/result/" + indexResult + "/situation";
      this.dbLink.updateObjectInFirebaseWithUrl( { [teamResultIndex]: situations}, indexResult);
      this.dbLink.updateObjectInFirebaseWithUrl( { [teamIndex]: situations}, "teams");
    });

    console.log(" ");
    console.log("team choices");
    console.log(choicesPack);
    choicesPack.map( (choice, index) => {
      console.log(" ");
      console.log("choix pour l'équipe " + index);
      console.table(choice);
      //TODO: Attention Round
      var indexResult = "result" + this.game.round;
      var teamResultIndex = "team" + index + "/choice";
      var teamIndex = "team" + index + "/result/" + indexResult + "/choice";
      this.dbLink.updateObjectInFirebaseWithUrl( { [teamResultIndex]: choice}, indexResult);
      this.dbLink.updateObjectInFirebaseWithUrl( { [teamIndex]: choice}, "teams");
    });

    console.log(" ");
    console.log("team exploitations");
    console.log(teamExploitations);
    teamExploitations.map( (exploitations, index) => {
      console.log(" ");
      console.log("exploitations pour l'équipe " + index);
      console.table(exploitations);
      //TODO: Attention Round
      var indexResult = "result" + this.game.round;
      var teamResultIndex = "team" + index + "/exploitation";
      var teamIndex = "team" + index + "/result/" + indexResult + "/exploitation";
      var teamAllIndex = "team" + index + "/result/" + indexResult + "/exploitation/all";
      var teamResultAllIndex = "team" + index + "/exploitation/all";
      this.dbLink.updateObjectInFirebaseWithUrl( { [teamResultIndex]: exploitations}, indexResult);
      this.dbLink.updateObjectInFirebaseWithUrl( { [teamResultAllIndex]: allExploitationPack[index]}, indexResult);
      this.dbLink.updateObjectInFirebaseWithUrl( { [teamIndex]: exploitations}, "teams");
      this.dbLink.updateObjectInFirebaseWithUrl( { [teamAllIndex]: allExploitationPack[index]}, "teams");
    });

    console.log(" ");
    console.log("team charges");
    console.log(teamCharges);
    teamCharges.map( (charges, index) => {
      console.log(" ");
      console.log("charges pour l'équipe " + index);
      console.table(charges);
      //TODO: Attention Round
      var indexResult = "result" + this.game.round;
      var teamResultIndex = "team" + index + "/charge";
      var teamIndex = "team" + index + "/result/" + indexResult +"/charge";
      var teamAllIndex = "team" + index + "/result/" + indexResult +"/charge/all";
      var teamResultAllIndex = "team" + index + "/charge/all";
      this.dbLink.updateObjectInFirebaseWithUrl( { [teamResultIndex]: charges}, indexResult);
      this.dbLink.updateObjectInFirebaseWithUrl( { [teamResultAllIndex]: allChargesPack[index]}, indexResult);
      this.dbLink.updateObjectInFirebaseWithUrl( { [teamIndex]: charges}, "teams");
      this.dbLink.updateObjectInFirebaseWithUrl( { [teamAllIndex]: allChargesPack[index]}, "teams");
    });

    console.log(" ");
    console.log("team finances");
    console.log(financesPack);
    financesPack.map( (finance, index) => {
      console.log(" ");
      console.log("finance pour l'équipe " + index);
      console.table(finance);
      //TODO: Attention Round
      var indexResult = "result" + this.game.round;
      var teamResultIndex = "team" + index + "/finance";
      var teamIndex = "team" + index + "/result/" + indexResult + "/finance";
      this.dbLink.updateObjectInFirebaseWithUrl( { [teamResultIndex]: finance}, indexResult);
      this.dbLink.updateObjectInFirebaseWithUrl( { [teamIndex]: finance}, "teams");
    });

    console.log(" ");
    console.log("team exceptional");
    console.log(exceptionalPack);
    exceptionalPack.map( (exceptional, index) => {
      console.log(" ");
      console.log("exceptional pour l'équipe " + index);
      console.table(exceptional);
      //TODO: Attention Round
      var indexResult = "result" + this.game.round;
      var teamResultIndex = "team" + index + "/exceptional";
      var teamIndex = "team" + index + "/result/" + indexResult + "/exceptional";
      this.dbLink.updateObjectInFirebaseWithUrl( { [teamResultIndex]: exceptional}, indexResult);
      this.dbLink.updateObjectInFirebaseWithUrl( { [teamIndex]: exceptional}, "teams");
    });

    console.log(" ");
    console.log("team result exercice");
    console.log(exercicePack);
    exercicePack.map( (exercice, index) => {
      console.log(" ");
      console.log("exercice pour l'équipe " + index);
      console.table(exercice);
      //TODO: Attention Round
      var indexResult = "result" + this.game.round;
      var teamResultIndex = "team" + index + "/exercice";
      var teamIndex = "team" + index + "/result/" + indexResult + "/exercice";
      this.dbLink.updateObjectInFirebaseWithUrl( { [teamResultIndex]: exercice}, indexResult);
      this.dbLink.updateObjectInFirebaseWithUrl( { [teamIndex]: exercice}, "teams");
    });

    console.log(" ");
    console.log("team flux");
    console.log(fluxPack);
    fluxPack.map( (flux, index) => {
      console.log(" ");
      console.log("flux pour l'équipe " + index);
      console.table(flux);
      //TODO: Attention Round
      var indexResult = "result" + this.game.round;
      var teamResultIndex = "team" + index + "/flux";
      var teamIndex = "team" + index + "/result/" + indexResult + "/flux";
      this.dbLink.updateObjectInFirebaseWithUrl( { [teamResultIndex]: flux}, indexResult);
      this.dbLink.updateObjectInFirebaseWithUrl( { [teamIndex]: flux}, "teams");
    });

    // remove all decision
    this.dbLink.deleteHasDecide();
    this.dbLink.incrementRound(this.game.round);
    this.round++;
    Object.keys(this.teamsBool).map( (key) => this.teamsBool[key] = false);
    this.disability = !this.disability;


    //change the game
    this.dbLink.changeGame();
    this.rServ.nullTheDecision();
    this.game = this.rServ.getGame();
    console.log(this.game);

  }

}
