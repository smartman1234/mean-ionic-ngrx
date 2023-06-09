# MEAN Ionic NgRx Lazy Load + REST Server API as Microservices Architecture
[![Build Status](https://travis-ci.org/FazioNico/mean-ionic-ngrx.svg?branch=master)](https://travis-ci.org/FazioNico/mean-ionic-ngrx) [![dependencies Status](https://david-dm.org/FazioNico/mean-ionic-ngrx/status.svg)](https://david-dm.org/FazioNico/mean-ionic-ngrx) [![devDependencies Status](https://david-dm.org/FazioNico/mean-ionic-ngrx/dev-status.svg)](https://david-dm.org/FazioNico/mean-ionic-ngrx?type=dev) [![Known Vulnerabilities](https://snyk.io/test/github/fazionico/mean-ionic-ngrx/badge.svg)](https://snyk.io/test/github/fazionico/mean-ionic-ngrx) ![Version](https://img.shields.io/badge/version-1.0.0.beta.1-blue.svg)
<blockquote>My own Full MEAN stack Starter kit based on Microservice architecture with Ionic 4 and ReactiveX API (ngrx/Store + ngrx/Effects) and many more tools...</blockquote>

## Overview
<blockquote>refact in proccess...</blockquote>

MEAN Ionic NgRx is a TypeScript Full Stack Starter with MongoDB + ExpressJS + Angular + NodeJS + Ionicframework all builded as microservices architecture managed inclued by LernaJS and many others funny tools.

- <b>Front-End:</b> Angular + Ionic 4 to provide multi platform application.
- <b>Back-End:</b> Express REST API managed by API Gateway to request correct microservices.

It's a simple todo application exemple with REST server-side for Users authentification with JWT. 
Front side is building with Angular and Ionicframework 4 and using ReactiveX API (ngrx/Store + ngrx/Effects) to provide a better and simply datas management + ngx-translate to internationalize languages + Angular HttpClientModule to work with REST server-side.

Hop is help you to start your project on the right way.

## Prerequisites
- NVM - [Download](https://github.com/creationix/nvm) & Install Node Version Manage
- NodeJS 10 - Download & Install Node.js and the npm package manager with NVM `$ nvm install node 10`.
- MongoDB - [Download](https://www.mongodb.com) & Install MongoDB, and make sure it's running on the default port (27017).
- [Typescript](https://www.npmjs.com/package/typescript) Latest stable version install in Global `$ npm install -g typescript`
- [Ionic 4](https://ionicframework.com/) Latest version install in Global `$ npm install -g ionic`
- [TypeDoc](http://typedoc.org/) - Latest stable version install in Global `$ npm install -g typedoc`
- [LernaJS](https://lernajs.io/) - Latest stable version install in Global `$ npm install -g lerna`
- [Karma](https://karma-runner.github.io) - Latest stable version install in Global `$ npm install -g karma-cli`
- [Protractor](http://www.protractortest.org/#/) - Latest stable version install in Global `$ npm install -g protractor && webdriver-manager update`
<!-- - [Heroku](heroku.com) - Download & Install latest stable version. -->
- Good knowledge of [ReactiveX API](http://reactivex.io/) & [NgRx](https://github.com/ngrx)
- [Redux DevTools Extension](http://extension.remotedev.io/) - Install Plugin for Chrome - Debugging application's state changes & provides power-ups for your Redux development workflow.
<!-- - Good knowledge of [GraphQL](http://graphql.org/) language. -->
<!-- - Good knowledge of Apollo Client & Server Side: [Apollo Docs](https://www.apollodata.com/). -->
- And you should also have git installed to a better working flow.

## Get Started
- You have to check the [Todo before Get Started](#todo-before-get-started)
- then follow Installation instruction

### Installation
- `$ nvm use 10`
- `$ npm install`

### Start
- `$ npm run dev` to start Front-End+Back-End in development mode
<!-- - `$ npm run prod` to start Front-End in production mode (you have to config your production environments variable) -->
- open browser at `http://localhost:4200`

<b>Tips:</b>
<!-- - `$ npm run helper.cmd` to display all `package.json` script available with definition -->
- use `killall mongod` or `killall node` to kill all process

### Build
comming soon...

### Deploy
comming soon...

### Documentations
- `$ npm run docs`
- open `./docs/index.html` to read documentation

<!-- ## Server GraphQL API Endpoints
- server dev runing on `http://localhost:8080/graphql`
- server prod runing on `http://YOUR_HOST/graphql` (or https)
- use GraphIQL UI to get full server documentation and many more... open browser with `http://localhost:8080/graphiql` -->

## Server REST API Endpoints
- server dev runing on `http://localhost:3000`
- server prod runing on `http://YOUR_HOST` (or https)

````
TODOS Endpoints

  path: http://localhost:3000/todos
  autenticate: false
  methode: $_GET / $_POST

  path: http://localhost:3000/todos/:id
  autenticate: false
  methode: $_GET / $_POST / $_DELETE


AUTH Endpoints

  path: http://localhost:3000/auth
  autenticate: false
  methode: $_POST

  path: http://localhost:3000/auth/isauth
  autenticate: false/true
  methode: $_GET

  path: http://localhost:3000/auth/signin
  autenticate: false
  methode: $_POST


USERS Endpoints

  path: http://localhost:3000/users
  autenticate: true
  methode: $_GET


  path: http://localhost:3000/users/:id
  autenticate: true
  methode: $_GET

````

## Documentation
App Documentations is generate by typeDoc. Use the following cmd to generate documentation
- `$ npm run docs` will generate Angular Application documentation and open the index doc in browser.

## Todo before get Started
<b>Important: You have to update/change/replace `mongod` npm script into main `./package.json` Update mongod $path with your own path (or run `$npm run mongod` to check if mongo starting correctly) and replace Git repository link into `tools/tasks/release.project.sh` line 50 by your'own.</b>

<b>Git Workflow</b>
- To have better development workflow, using [Git Flow](http://nvie.com/posts/a-successful-git-branching-model/) model working.
- To dynamicly add commit to CHANGELOG.md, add `<core|update|features|fix>: ` at the begin of the commit. Script search `: ` to generate CHANGELOG.md
- To disable auto generate CHANGELOG.md, go to `tools/tasks/release.project.sh` and comment all `changelog()` content function or comment changelog call function in line 88 as `# changelog`.

<!-- <b>To using in production mode:</b>
- install Heroku CLI
- create your own Heroku account and init your server project with the following cmd :
  - `git checkout master`
  - `$ heroku create`
  - check with `$ git remote -v`
  - optional: `$ git checkout <WORKING_BRANCH>`
- add your own production variable environment into `./environments/production.ts` -->

<!-- <b>Heroku docs:</b>
- get started doc for NodeJS
[https://devcenter.heroku.com/articles/git](https://devcenter.heroku.com/articles/git)
- how to use Heroku with NodeJS & Git [https://devcenter.heroku.com/articles/getting-started-with-nodejs](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction) -->

## Contribution
Feel free to contrib to my stack.
- clone/fork project
- `$ git checkout -b YOUR_BRANCH`
- do your work...
- pass test...
- pull request with your branch on the `dev` branch / or submit small fix on the `master` branch.
- i will merge it and upd project version soon as possible.


