import { Injectable } from '@angular/core';

//Firebase
import { AuthFirebaseService } from './auth-firebase.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'; // Do not import from 'firebase' as you'll lose the tree shaking benefits

@Injectable()
export class DbFirebaseService {

  private listRef: FirebaseListObservable<any[]>;
  private objectRef: FirebaseObjectObservable<any[]>;
  private currentUser: firebase.User;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe((user: firebase.User) => {
      this.currentUser = user;
      if( user !== undefined){
        if( user !== null){
          this.listRef = db.list( this.currentUser.uid );
          this.objectRef = db.object( this.currentUser.uid );
        }
      }
    });
  }

  setObjectInFirebase(o: object): void{
    this.objectRef.set(o);
  }

  setObjectInFirebaseWithUrl(o: object, url: string): void{
    var objectPlace = this.db.object('/' + this.currentUser.uid + '/' + url);
    objectPlace.set(o);
  }

  updateObjectInFirebaseWithUrl(o: object, url: string): void{
    var objectPlace = this.db.object('/' + this.currentUser.uid + '/' + url);
    objectPlace.update(o);
  }

  setStringInFirebase(o: string): void{
    this.objectRef.set(o);
  }

  setNumberInFirebase(o: number): void{
    this.objectRef.set(o);
  }

  updateObjectInFirebase(o: object): void{
    this.objectRef.update(o);
  }

  deletObjectInFirebase(url: string): void{
    const itemObservable = this.db.object('/' + this.currentUser.uid + '/' + url);
    itemObservable.remove();
  }

  //SPEC stratent
  deleteHasDecide(): void{
    const itemObservable = this.db.object('/' + this.currentUser.uid + '/hasDecide');
    itemObservable.remove();
  }

  incrementRound(round: number): void{
    const itemObservable = this.db.object('/' + this.currentUser.uid);
    itemObservable.update({ round: round + 1});
  }

  createUser(key: string, o: object): void{
    const itemObservable = this.db.object('/users');
    const object = { [key]: o };
    itemObservable.update(object);
  }

  getUserList():  FirebaseListObservable<any[]>{
    return this.db.list("/users");
  }

  getUser():  FirebaseObjectObservable<any[]>{
    return this.db.object("/users/" + this.currentUser.uid);
  }
  //END SPEC

  getObjectInFirebase(url: string) : FirebaseObjectObservable<any[]> {
    return this.db.object(url);
  }

  getListInFirebase(url: string) : FirebaseListObservable<any[]> {
    return this.db.list(url, { preserveSnapshot: true });
  }

  getRound(link: FirebaseListObservable<any[]>): any{
    link.subscribe( snapshots => {
      snapshots.map(
        (snap) => {
          if(snap.$key === "round"){
            return snap.$value;
          }
      })
    });
  }

  getTeams(link: FirebaseListObservable<any[]>){
    var answer = [];
    link.subscribe( snapshots => {
      snapshots.map( (snap) => {
        if(snap.$key === "teams"){
          answer.push(snap.$value);
        }
      });
      return answer;
    });
  }

}
