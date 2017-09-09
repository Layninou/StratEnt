import { Injectable, Input, Output, EventEmitter } from '@angular/core';

//Firebase
import { AuthFirebaseService } from '../firebase/auth-firebase.service';
import { DbFirebaseService } from '../firebase/db-firebase.service';

@Injectable()
export class AuthService {

  @Output('auth') auth: EventEmitter<boolean> = new EventEmitter<boolean>();
  private authBool: boolean;
  private falsePassword: string;

  constructor(private fireAuth: AuthFirebaseService, private fireDb: DbFirebaseService) {
    this.authBool = false;
    this.falsePassword = "ThePassword";
  }

  getAuth(): EventEmitter<boolean>{
    setTimeout(()=>{this.isAuth();}, 500);
    return this.auth;
  }

  getUsers(){
    return this.fireDb.getUserList();
  }

  getUser(){
    if(this.fireAuth.authenticated){
      return this.fireDb.getUser();
    }
  }

  isAuth(): void{
    if(this.fireAuth.displayName() === 'test'){
      this.authBool = false;
    }
    if(this.fireAuth.displayName() !== 'test'){
      this.authBool = true;
    }
    this.auth.emit(this.authBool);
  }

  createAuth(user: string, password?: string){
    // if(password !== undefined){
    //   this.fireAuth.createUserWithMail(user, password);
    // } else {
    //   this.fireAuth.createUserWithMail(user, this.falsePassword);
    // }
    this.fireAuth.createUserWithMail(user, this.falsePassword);
  }

  loginAuth(user: string, password?: string){
    // if(password !== undefined){
    //   this.fireAuth.signInWithMail(user, password);
    // } else {
    //   this.fireAuth.signInWithMail(user, this.falsePassword);
    // }
    this.fireAuth.signInWithMail(user, this.falsePassword);
  }

  logOutAuth(){
    this.fireAuth.signOut();
    this.getAuth();
  }

  /*
  *
  * Add the user pseudo to the user group
  * @author: Layninou
  *
  */
  addUser(author: string, place: string, date: string): void{
    if(this.fireAuth.authenticated) {
      var newKey = this.fireAuth.displayName();
      this.fireDb.createUser(newKey, { author: author, place: place, date: date});
    }
  }

}
