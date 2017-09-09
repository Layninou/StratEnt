import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

//Object
import { Game } from './objects/game';

//Constant
import { NULL_GAME } from './constant/init-Game.const';

//Firebase
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'; // Do not import from 'firebase' as you'll lose the tree shaking benefits

//Service
import { DecisionsService } from './service/decisions.service';
import { ResultService }    from './service/result.service';
import { AuthService }      from './service/auth.service';

//Firebase Service
import { DbFirebaseService } from './firebase/db-firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ DbFirebaseService ]
})
export class AppComponent{

  game: FirebaseListObservable<any[]>;
  companyList: FirebaseListObservable<any[]>;
  currentUser: firebase.User;

  syncGame: Game;
  protoGame: any[];

  round : number;
  authentification: boolean;
  user: any;

  constructor(private dbLink: AngularFireDatabase,
              private route: ActivatedRoute, private router: Router,
              private servDb: DbFirebaseService,
              private servDecision: DecisionsService,
              private servAuth: AuthService,
              private servResult: ResultService,
              private afAuth: AngularFireAuth){

    var anyGame;
    this.router.navigate(['./authentification']);
    //to find the round
    this.round = -1;
    this.syncGame = NULL_GAME;
    this.user = { author: "", place: "", date: ""};

    afAuth.authState.subscribe((user: firebase.User) => {
      this.currentUser = user;
      if( user !== undefined) {
        if( user !== null) {

          this.game = dbLink.list(user.uid);
          anyGame = dbLink.object(user.uid);
          this.companyList = this.dbLink.list( user.uid + '/teams');

          this.servAuth.getUser().subscribe( (userProp) => {
            this.user = userProp;
          });

          this.game.subscribe( (snapshots) => {
            snapshots.map( (snap) => {
              if( snap.$key === "round"){
                this.round = snap.$value;
              }
            })
          });

          anyGame.subscribe( snapshots => {
            this.protoGame = snapshots;
          });

          this.servAuth.getAuth().subscribe( (authBool) => {
            this.authentification = authBool;
          });

        }
      }


    });

  }
  //END CONSTRUCTOR

  hasAuthentified(event){
    this.authentification = event;
  }

  shareCompanyAndRound(company): void{
    this.servDecision.shareCompany(company);
    this.servDecision.shareRound(this.round);
    this.shareGame();
  }

  shareGame(): void{
    this.syncGame = this.servResult.transformGame(this.protoGame);
    this.servResult.pushGame(this.syncGame);
  }

  testFire(): void{
    this.syncGame = this.servResult.transformGame(this.protoGame);
    console.log(this.syncGame);
  }

  logOut(): void{
    this.servAuth.logOutAuth();
  }

}
