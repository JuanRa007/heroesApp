import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    /* 
      if (this.authService.auth.id) {
        return true;
      }
    
      console.log('Bloqueado por el AuthGuard - canActivate');
      return false;
    */

    return this.authService.verificaAutenticacion().pipe(tap(estaAutenticado => {
      if (!estaAutenticado) {
        this.router.navigate(['./auth/login']);
      }
    }));

  }



  // Sólo vale para prevenir que el usuario cargue el módulo. Si ya estaba previamente cargado el módulo,
  // la persona podrá entrar en el módulo, no como con el canActivate.
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    /* 
      console.log('CanLoad:', true);
      console.log(route);
      console.log(segments); 
    if (this.authService.auth.id) {
      return true;
    }
    console.log('Bloqueado por el AuthGuard - canLoad');
    return false;
    */

    return this.authService.verificaAutenticacion().pipe(tap(estaAutenticado => {
      if (!estaAutenticado) {
        this.router.navigate(['./auth/login']);
      }
    }));

  }

}
