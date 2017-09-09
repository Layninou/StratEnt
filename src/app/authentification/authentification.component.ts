import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit, OnChanges {

  auth: boolean;
  users: any[];

  author: string;
  place: string;
  date: string;

  constructor( private authServ: AuthService) {
    authServ.getUsers().subscribe( (users) => this.users = users );
  }

  ngOnInit() {
    this.authServ.getAuth().subscribe( authBool => this.auth = authBool);
  }

  ngOnChanges(changes: SimpleChanges){
    this.ngOnInit();
  }

  createAuth(): void{

    if(this.author === undefined || this.author === ""){
      console.error("you need an author to create a session");
      return;
    }
    if(this.place === undefined || this.place === ""){
      console.error("you need a place to create a session");
      return;
    }
    if(this.date === undefined || this.date === ""){
      console.error("you need a date to create a session");
      return;
    }

    var nameUser = this.author + "_" + this.place + "_" + this.date + "_" + "@notamail.com";
    this.authServ.createAuth(nameUser);
    setTimeout( () => {
      this.authServ.getAuth();
      setTimeout( () => {
        this.authServ.addUser(this.author,this.place,this.date);
      }, 700);
    }, 500);
    
  }

  logAuth(user): void{

    var nameUser = user.author + "_" + user.place + "_" + user.date + "_" + "@notamail.com";
    this.authServ.loginAuth(nameUser);
    setTimeout( () => {
      this.authServ.getAuth();
    }, 500);

  }

}
