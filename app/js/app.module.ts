/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />

import core from './core/core.module';
import phoneList from './phone_list/phone_list.module';
import phoneDetail from './phone_detail/phone_detail.module';

var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    core.name,
    phoneList.name,
    phoneDetail.name
]).config(configure);

configure.$inject = ['$routeProvider'];

function configure($routeProvider) {
    $routeProvider.
        when('/phones', {
            templateUrl: 'js/phone_list/phone_list.html',
            controller: 'PhoneListCtrl',
            controllerAs: 'vm'
        }).
        when('/phones/:phoneId', {
            templateUrl: 'js/phone_detail/phone_detail.html',
            controller: 'PhoneDetailCtrl',
            controllerAs: 'vm'
        }).
        otherwise({
            redirectTo: '/phones'
        });
};

angular.bootstrap(document.documentElement, ['phonecatApp']);