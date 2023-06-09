import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
  img{
    width: 100%;
    border-radius:10px;
  }
  `]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(private activateRoute: ActivatedRoute, private heroesService: HeroesService, private router: Router) { }

  ngOnInit(): void {

    // ig del héroe
    // y mostrarlo en consola

    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.heroesService.getHeroePorId(id))
      )
      .subscribe(heroe => this.heroe = heroe);

  }


  regresar() {
    this.router.navigate(['/heroes/listado']);
  }

}
