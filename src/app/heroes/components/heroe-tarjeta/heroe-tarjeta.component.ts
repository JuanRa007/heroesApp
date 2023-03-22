import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent {

  // Incorporo la variable que me pasan desde "listado.component.ts", para usarla en
  // este componente "tarjeta":
  // <app-heroe-tarjeta [heroe]="heroe"></app-heroe-tarjeta>
  // El signo "!" es para indicarle a Angular (estamos en modo estricto de comprobaciones),
  // que se fie de mí, que le llegará siempre un valor.
  @Input() heroe!: Heroe;

}
