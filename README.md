# MyNg5App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).



## Screen 1 ##

1) We can feteh data from API, right now i have taken from Mockdata which is (config.ts) file.
2) For validation,we can have error dialog box on click of submit button.
3) we can have sepreate checkbox component  & list of cities we can display in *ngFor Loop rather then using Angular Material Selection List.
4) We can show information bar on top of page which will indicates that alteast one city should be selected.
5)On click of submit , it's redirecting to SCREEN-2 , while it will check resolve , if city which we have selected is have weather details or not .we can handle Http request  error some better way.



## Screen 2 ##

1) we can make table component seprartely & include in grid Wrapper.
2) we can hadle http error request in resolver ,if API is showing 404.
3) Instead of using mat-table with filter functionality, we can make our custom table & custom pipe for filtering grid data.
4) we can filter data based on keyup event on input field.
5)Instead of creating grid component, we can make as module and load in lazy laoding way.
6)We can show loader till data is not loaded in grid component.
7)i have taken http data for grid, but it's response data is not enough to show search funcationlity,hence i have added data through mockdata as well.


P.S: I have not much focused on UI part , but we can defienlety enhance screen UI which can attracts user.

