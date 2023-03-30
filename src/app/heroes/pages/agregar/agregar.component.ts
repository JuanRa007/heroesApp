import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
    img{
      width:90%;
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

  constructor(private heroesService: HeroesService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

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
      this.heroesService.actualizarHeroe(this.heroe).subscribe(heroe => this.mostrarSnakbar('Registro actualizado.'));
    } else {
      // Crearé un nuevo registro.
      this.heroesService.agregarHeroe(this.heroe)
        .subscribe(heroe => {
          this.router.navigate(['/heroes/editar', heroe.id]);
          this.mostrarSnakbar('Registro creado.');
        });
    }

  }


  borrarHeroe() {


    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: this.heroe
      //      data: { ...this.heroe }        // Se pasa ASÍ por valor, no por referencia, y así nos aseguramos que NO se modificará el objeto a la vuelta.
    });


    dialog.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.heroesService.borrarHeroe(this.heroe.id!).subscribe(
            resp => {

              // Sacamos al usuario de aquí ==> al listado.
              this.router.navigate(['/heroes'])

            }
          )
        }
      }
    )

  }

  mostrarSnakbar(mensaje: string) {
    this.snackBar.open(mensaje, 'Ok!!', {
      duration: 2500
    })
  }

}
