import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
    img{
      width:100%;
      border-radius:10px;
    }
    `
  ]
})
export class AgregarComponent implements OnInit {


  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }

  constructor(private heroesService: HeroesService, private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    // Controlamos el error por id = undifined al crear nuevos héroes.
    if (!this.router.url.includes('editar')) {
      return;
    }

    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.heroesService.getHeroePorId(id))
      )
      .subscribe(heroe => { this.heroe = heroe })

  }

  guardar() {
    // console.log(this.heroe);

    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (this.heroe.id) {
      // Actualiza ya que tenemos un id.
      this.heroesService.actualizarHeroe(this.heroe).subscribe(heroe => console.log('Actualizando', heroe));
    } else {
      // Crearé un nuevo registro.
      this.heroesService.agregarHeroe(this.heroe)
        .subscribe(heroe => {
          this.router.navigate(['/heroes/editar', heroe.id]);
        });
    }

  }


  borrarHeroe() {
    this.heroesService.borrarHeroe(this.heroe.id!).subscribe(
      resp => {

        // Sacamos al usuario de aquí ==> al listado.
        this.router.navigate(['/heroes'])

      }
    )
  }


}
