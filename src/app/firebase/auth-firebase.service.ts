import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'; // Do not import from 'firebase' as you'll lose the tree shaking benefits

@Injectable()
export class AuthFirebaseService {

  private authState: Observable<firebase.User>;
  private currentUser: firebase.User;

  constructor(public afAuth: AngularFireAuth) {
    this.authState = afAuth.authState;
    afAuth.authState.subscribe((user: firebase.User) => this.currentUser = user);
  }

  /*
 *
 * Certificate the authentification
 * @return {boolean} the current user
 * @author: Layninou
 *
 */
  get authenticated(): boolean {
    return this.currentUser !== null;
  }

/*
*
* This sign in with pop with mail
* @return {firebase.Promise<any>} it is the authentification signature
* @author: Layninou
*
*/
signInWithMail(user: string, password: string): firebase.Promise<any> {
  return this.afAuth.auth.signInWithEmailAndPassword(user, password)
    .catch((error) => {
      console.log(error);
      throw error;
    });
}

/*
 *
 * Create sign in with pop with mail
 * @return {firebase.Promise<any>} it is the authentification signature
 * @author: Layninou
 *
 */
 createUserWithMail(user: string, password: string): firebase.Promise<any> {
   return this.afAuth.auth.createUserWithEmailAndPassword(user, password)
      .catch((error) => {
        console.log(error);
        throw error;
      });
 }

/*
 *
 * This sign in with pop with google
 * @return {firebase.Promise<any>} it is the authentification signature
 * @author: Layninou
 *
 */
 signInWithGoogle(): firebase.Promise<any> {
   return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
 }

 /*
 *
 * This logOut the user
 * @author: Layninou
 *
 */
 signInWithFacebook(): firebase.Promise<any> {
   return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
 }

 /*
  *
  * This logOut the user
  * @author: Layninou
  *
  */
  signOut(): void {
    this.afAuth.auth.signOut();
  }

/*
 *
 * give the uid
 * @author: Layninou
 *
 */
 displayName(): string {
   if (this.currentUser !== undefined) {
     if(this.currentUser !== null){
       return this.currentUser.uid;
     }
     else {
       return 'test';
     }
  }
 }

}
