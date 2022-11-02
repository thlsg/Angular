import { Component, OnInit } from '@angular/core';
import { Actions } from './models/actions';
import { ActionsServices } from './models/actions.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo-list';
  desactive = false;

  date = new Date();

  newActions: Actions = {
    title : "",
    content: "",
  }

  actions: Actions[] = [];

  // Injection de la dépendance ActionsService
  constructor(private actionsServices: ActionsServices) { }

  ngOnInit() {
    console.log("App chargé");
    this.recupererActions();
  }
  
  toggleButton() {
    this.desactive = !this.desactive;
  }
  
  recupererActions() {
    this.actions = this.actionsServices.getActions();
  }

  addActions(){
    this.actionsServices.addActions({...this.newActions});
  }

  changerValeur(){
    this.newActions.title = "Poulet";
    this.newActions.content = "Machin truc bidule";
  }

}