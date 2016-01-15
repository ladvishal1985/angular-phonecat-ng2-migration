# AngularJS Phone Catalog - Migration to Angular 2.0

This is the original Angular 1.X application that was used for the tutorial. Now we have Angular 2.0 released as beta it now time to experiment with it. Angular team has posted the migration steps for this particular sample. This repository is just an attempt to assess the complexity of the process. The steps are given on official Angular 2.0 website. It is assumed that you have already followed the Angular 1.X phonecat application tutorial and have all the prerequisites in place to run the application. 

## Angular 2.0 Migration - Step 1 (Follow the style guide)

The first step in the migration process is to make the application look like what suggested in the best practices/style guide. 
Style guide avaialble here: https://github.com/johnpapa/angular-styleguide 
This branch would contain the application modified to follow the recommended best practices.
Branch - ng-migration-step-1


## Angular 2.0 Migration - Step 2 (Switch to TypeScript and Module Loading)
Convert all our code to TypeScript. 
Enable the compilation process.
Introduce the module loading using System.js 
To run this application install:
	
#####SystemJS: 
    npm i systemjs -save
#####TypScript: 
    npm i typescript --save-dev
#####TypeScript Definition Manager: 
    npm i -g tsd
##### Install type definitions:
    tsd install angular angular-route angular-resource angular-mocks jasmine
##### To execute compilation: 
    npm run tsc 

Branch - ng-migration-step-2

## Angular 2.0 Migration - Step 3 (Introduce Angular 2.0)
This is the final process for the migrations. The process requires us to use the UpdgradeAdapter which helps us to use Angular 1.x and Angular 2.0 together so that the existing functionalities does not get break.
The major steps include:
   1. Bootstrapping (Hybrid Angular 1.x + 2)
   2. Converting all factories/services to follow Angular Syntax
   3. Converting controllers to components
   4. Introducing routing in place
   5. Bootstrapping with Angular 2.0 
   6. Removing all the Angular 1.x refernces