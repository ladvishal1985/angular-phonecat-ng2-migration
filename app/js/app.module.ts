/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />

import {UpgradeAdapter} from 'angular2/upgrade';
import {HTTP_PROVIDERS} from 'angular2/http';
import core from './core/core.module';
import phoneList from './phone_list/phone_list.module';
import phoneDetail from './phone_detail/phone_detail.module';
import upgradeAdapter from './core/upgrade_adapter';

var phonecatApp = angular.module('phonecatApp', [
    'ngAnimate',
    'ngRoute',
    core.name,
    phoneList.name,
    phoneDetail.name
]).config(configure);

configure.$inject = ['$routeProvider'];

function configure($routeProvider) {
    $routeProvider.
        when('/phones', {
            template: '<pc-phone-list></pc-phone-list>'
        }).
        when('/phones/:phoneId', {
            template: '<pc-phone-detail></pc-phone-detail>'
        }).
        otherwise({
            redirectTo: '/phones'
        });
};

upgradeAdapter.addProvider(HTTP_PROVIDERS);
upgradeAdapter.upgradeNg1Provider('$routeParams');
upgradeAdapter.bootstrap(document.documentElement, ['phonecatApp']);