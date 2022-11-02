import { Injectable } from '@angular/core';
import { Actions } from './actions';


@Injectable({
  providedIn: 'root'
})

export class ActionsServices{
  public actions: Actions[] = [
    {
      title: "Faire les courses",
      content: "Acheter des pates, du riz, de l'eau et des pizza!",
      Fait: true,
    },
    {
      title: "Push le repo git",
      content: "Mettre en commun le code lorsque j'aurais fini",
      Fait: true,
    },
    {
      title: "Faire le plein d'essence",
      content: "Aller à la sation total pour remettre du sp98 dans la voiture.",
      Fait: false,
    },
    {
      title: "Faire le plein d'essence",
      content: "Aller à la sation total pour remettre du sp98 dans la voiture.",
      Fait: false,
    }
  ];


  constructor() { }

  /**
   * Récupère les actions
   * @returns La liste des actions
   */
  getActions(): Actions[] {
    return this.actions;
  }

  addActions(actions: Actions): void {
    this.actions.push(actions);
  }

  deleteActions(actions: Actions): void {
    this.actions = this.actions.filter(
      (art: Actions) => {
        return JSON.stringify(this.actions) !== JSON.stringify(art);
      }
    )
  }

}
