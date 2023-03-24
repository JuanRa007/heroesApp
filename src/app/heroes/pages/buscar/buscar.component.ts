import { Component } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent {

  // Para las búsquedas
  termino: string = '';
  heroes: Heroe[] = [];
  heroeSeleccionado: Heroe | undefined;

  constructor(private heroesService: HeroesService) { }


  buscando() {

    this.heroesService.getSugerencias(this.termino.trim())
      .subscribe(heroes => this.heroes = heroes);

  }


  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {

    if (!event.option.value) {
      console.log('Nada a buscar ....');
      this.heroeSeleccionado = undefined;
      return;
    }

    // console.log(event);

    const heroe: Heroe = event.option.value;
    // console.log(heroe);

    this.termino = heroe.superhero;

    // Obtenemos sus datos mediantes petición http (como en la vida real).
    this.heroesService.getHeroePorId(heroe.id!)
      .subscribe(heroe => this.heroeSeleccionado = heroe);

  }

}
