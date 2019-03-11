# GithubTypeahead

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.
The UI was created with Angular Material components and theme, and the chart was generated using the ngx-charts package.

## Installation

### Pre-requisites
- Install `@angular/cli` --- `npm install -g @angular/cli`
- Node LTS

### Installation process
- Run `npm install` on the root of the project

## Run the project

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## About the project

In this project I decided to use `@ngrx/store` and `@ngrx/effects` to handle the UI and the communication between components. This allowed me to have one single source of truth for the data which my components will then use to show whatever it is I need them to show in the UI (results, error messages, charts).

The most difficult part for me was to figure out what this instruction meant:

> Create a search field with a (repo) typeahead, where user can type any github username and the search would return the list of users github repos

The way I interpreted it was that as I typed, I should get all the repos from the username I was typing. I wasn't entirely sure if I was supposed to make a typeahead with GitHub users and then select a user and then get a repo. Since an endpoint to get more usernames wasn't mentioned in the challenge information, I stuck to my original thought.

