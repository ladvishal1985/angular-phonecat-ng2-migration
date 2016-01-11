'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    'phonecat.core',
    'phonecat.list'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'js/phone_list/phone_list.html',
        controller: 'PhoneListCtrl',
        controllerAs: 'vm'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
