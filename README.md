# PipesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



## ENLACES:

https://gist.github.com/Klerith/3ddee04a27c09be05e888d5d4ac1d09f

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax

https://github.com/Klerith/angular-basicos/releases/tag/v5.0.0

https://angular.io/cli/build

https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator

https://developers.giphy.com/
https://restcountries.com/                  private apiUrl: string = 'https://restcountries.com/v2';
  Api's variadas

https://quicktype.io/
  Permite crear tipados para json

https://animate.style/
  Animaciones de CSS

https://github.com/Klerith/angular-paises


https://primeng.org/
  PrimeNG para estilos/plantillas Angular

https://www.primefaces.org/primeflex/
  Flex en PRIMENG
  npm install primeflex --save

https://angular.io/api?query=pipe
  Pipes en Angular

https://angular.io/api/common/DatePipe
  DatePipe

https://material.angular.io/
  Material Angular



## Comandos.

ng generate component heroes/listado
  Me genera un nuevo componente (ts, html, css) en la ubicación que indico (/heroes), con el nombre "listado.

ng generate module <nombre>
  Me genera un nuevo módulo con las importaciones. Incluso con "CommonModule" para poder usar los *ngFor, *ngIf...
ng generate module <nombre> --flat
  El parámetro "flat" evitar crear el módulo dentro de una carpeta con el mismo nombre del módulo.

ng generate component dbz/mainPage --skip-tests
  Me genera el componente, y al estar dentro de la carpeta DBZ (módulo creado anteriormente), me actualiza su DBZMODULE.ts con este nuevo componente.

  ---> Exportar el componente recien creado al módulo.
  ---> Importar el módulo dentro del "app.module.ts".

ng generate service gifs/services/gifs --skip-tests --s
  Generar un servicio dentro de carpetas no creadas aún.

ng generate pipe ventas/pipes/ordenar --skip-tests
  Generar un PIPE personalizado dentro de la carpeta "ventas/pipes/".



ng build --configuration production
  Generar los recuros para producción.