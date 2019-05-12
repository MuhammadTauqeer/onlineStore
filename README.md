# OnlineStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

#Instructions

This is a sample Online Store built on Angular 7.
For expreienced programmers these instruction are not new.
For beginners please follow after cloning it to your local drive.
I use Visual Studio Code and prefer using Visual Studio Code.

1. open terminal in VS Code or access the onlineStore folder on CMD (command prompt) what ever suits you.
2. Run npm i @angular/cli
3. Run npm i @angular/core
4. Run npm i
5. Run npm run json (for rest datasource) (on the first terminal)
6. Run ng serve --open (to open the web application in your default browser) (on the second terminal)

My main focus was to show the use of HTML structuring, Bootstrap 4, CSS3, CRUD, REST API.
there is still so much that can be added to it. May be with time I will update it. For now I am too busy with a few projects.
Admin Module is self contained and does not load with the application. It will load only when the admin logs in. 
The login depends on the restful web services. I have used JWT (json web token). you can find the details here https://tools.ietf.org/html/rfc7519.
CRUD funcionality can be accessed once logged in.

Other than that Angular components, Angular forms, data binding, event binding, routing etc can be found in the project. 





## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
