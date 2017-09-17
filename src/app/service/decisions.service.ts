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
  @Output('employees') employees: EventEmitter<any> = new EventEmitter<any>();
  private listHire: any;
  private employeeCompany: any;
  private listEmployee: any[];

  @Output('machinery') machinery: EventEmitter<any> = new EventEmitter<any>();
  private listMachinery: number[];

  private companyShared: Company;
  private roundGame: number;

  private allCompany: Company[];
  private currentUser: firebase.User;

  constructor(private dbLink: AngularFireDatabase, private afAuth: AngularFireAuth) {

    this.listHire = { productor: 0, sellor: 0, manager: 0};
    this.employeeCompany = { productor: 0 , sellor: 0, manager: 0};

    afAuth.authState.subscribe((user: firebase.User) => {

      this.currentUser = user;

      if( user !== undefined) {
        if( user !== null) {

          const companyList = this.dbLink.list( user.uid + '/teams');

          this.allCompany = new Array();
          this.listMachinery = new Array();
          this.listEmployee = new Array();

          companyList.subscribe( (snapshots) =>
          snapshots.map( (company, indexCompany) => {


              var numberProductor = 10;
              var numberSellor = 10;
              var numberManager = 0;
              this.allCompany[indexCompany] = (company);
              this.listMachinery[indexCompany] = (company.companyMachinery.length);
              this.listEmployee[indexCompany] = ({
                productor: numberProductor,
                sellor: numberSellor,
                manager: numberManager
              });
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
    this.listHire.productor = n - this.employeeCompany['productor'];
    this.changeHire(this.listHire);
  }

  changeSellor(n: number){
    this.listHire.sellor = n - this.employeeCompany['sellor'];
    this.changeHire(this.listHire);
  }

  changeManager(n: number){
    this.listHire.manager = n - this.employeeCompany['manager'];
    this.changeHire(this.listHire);
  }

  setEmployee(index: number){
    this.getProductor(index);
    this.getSellor(index);
    this.getManager(index);
    this.employees.emit(this.listEmployee[index]);
  }

  getEmployee(): EventEmitter<any>{
    return this.employees;
  }

  getProductor(index: number): number{
    this.employeeCompany['productor'] = this.listEmployee[index]['productor'];
    return this.listEmployee[index]['productor'];
  }

  getSellor(index: number): number{
    this.employeeCompany['sellor'] = this.listEmployee[index]['sellor'];
    return this.listEmployee[index]['sellor'];
  }

  getManager(index: number): number{
    this.employeeCompany['manager'] = this.listEmployee[index]['manager'];
    return this.listEmployee[index]['manager'];
  }

  //Machinery
  getNumberMachine(): EventEmitter<any>{
    return this.machinery;
  }

  setNumberMachine(index: number){
    this.machinery.emit(this.listMachinery[index]);
  }
}
