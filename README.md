# Spa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
If the browser outside Docker shows `ERR_RESET_CONNECTION`, add to `angular.json` 
`"serve": {
  ...
  "options": {
    "browserTarget": "my-app:build",
    "port": 4200,
    "host": "0.0.0.0",
    "poll": 2000
  },
  ...
}`

For docker in Windows: `ng serve --pool=2000` to force watch files changes


## Stop a previous process
To stop a previous process that can't be killed by `Ctrl+C`, use command `ps -ef | grep "ng serve"` and then `kill <pid>`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
