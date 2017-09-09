import { Injectable, Output, EventEmitter } from '@angular/core';

//Objects
import { Product }            from '../objects/product';
import { Company }            from '../objects/company';
import { FinancialDecision }  from '../objects/decision/financial';
import { MachineFlux }        from '../objects/decision/machine-flux';
import { Production }         from '../objects/decision/production';
import { Marketing }          from '../objects/decision/marketing';
import { Remuneration }       from '../objects/decision/remuneration';
import { HireFire }           from '../objects/decision/hire-fire';
import { Studies }            from '../objects/decision/studies';
import { Exceptionnal }       from '../objects/decision/exceptionnal';

//Firebase
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'; // Do not import from 'firebase' as you'll lose the tree shaking benefits

@Injectable()
export class DecisionsService {

  @Output('hire-fire') hireFire: EventEmitter<any> = new EventEmitter<any>();
  private listHire: any;

  private companyShared: Company;
  private roundGame: number;

  private allCompany: Company[];
  private currentUser: firebase.User;

  constructor(private dbLink: AngularFireDatabase, private afAuth: AngularFireAuth) {

    this.listHire = { productor: 0, sellor: 0};

    afAuth.authState.subscribe((user: firebase.User) => {

      this.currentUser = user;

      if( user !== undefined) {
        if( user !== null) {

          const companyList = this.dbLink.list( user.uid + '/teams');
          this.allCompany = [];
          companyList.subscribe( (snapshots) =>
          snapshots.map( (company) => {
              this.allCompany.push(company);
            })
          );

        }
      }

    });
  }

  getAllCompany(): FirebaseListObservable<any[]>{
    if(this.currentUser !== undefined){
      if(this.currentUser !== null){
        return this.dbLink.list(this.currentUser.uid + '/teams');
      }
    }
  }

  foundLargerProduct(prod: Product[]): Product {
    var maxProd = prod[0];
    prod.map(
      (product : Product) =>{
        if(product.attracts.length > maxProd.attracts.length){
          maxProd = product;
        }
      }
    )
    return maxProd;
  }

  shareCompany(event): void {
    this.companyShared = event;
  }

  getCompany(): Company {
    return this.companyShared;
  }

  updateCompany(id: number) {
    return this.allCompany[id];
  }

  shareRound(event): void {
    this.roundGame = event;
  }

  getRound(): number {
    return this.roundGame;
  }


  //Hire Fire
  getHire(): EventEmitter<any>{
    return this.hireFire;
  }

  changeHire(answer: any): any{
    this.hireFire.emit(answer);
  }

  changeProductor(n: number){
    this.listHire.productor = n;
    this.changeHire(this.listHire);
  }

  changeSellor(n: number){
    this.listHire.sellor = n;
    this.changeHire(this.listHire);
  }

}
