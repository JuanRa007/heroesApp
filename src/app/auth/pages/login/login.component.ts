import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService) { }

  login() {

    // Ir al backend
    // Un usuario

    // this.router.navigate(['./heroes']);

    this.authService.login().subscribe(resp => {

      console.log(resp);

      // Si hay respuesta exitosa, voy al listado.
      if (resp.id) {
        this.router.navigate(['./heroes']);
      }

    })


  }

}
