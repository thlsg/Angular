import { Component, Input, OnInit, OnDestroy  } from '@angular/core';
import { Actions } from '../models/actions';
import { ActionsServices } from '../models/actions.services';



@Component(
  {
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
  }
)
export class CardComponent implements OnInit, OnDestroy {

  // le "!" indique au compilateur que tout va bien se passer!
  // il indique à TS que la variable aura toujours une valeur
  @Input() actions!: Actions;

  constructor(private actionsService: ActionsServices) {
    console.log("Constructeur !")
  }

  ngOnInit(): void {
    console.log("Fin de l'initialisation")
  }

  ngOnDestroy(): void {
    console.log("destruction !")
  }

  deleteArticle(actions: Actions): void {
    console.log(this.actionsService.getActions());
    
    this.actionsService.deleteActions(actions);

    console.log(this.actionsService.getActions());
  }

}
