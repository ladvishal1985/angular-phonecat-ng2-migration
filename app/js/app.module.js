/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
System.register(['angular2/http', './core/core.module', './phone_list/phone_list.module', './phone_detail/phone_detail.module', './core/upgrade_adapter'], function(exports_1) {
    var http_1, core_module_1, phone_list_module_1, phone_detail_module_1, upgrade_adapter_1;
    var phonecatApp;
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
    }
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_module_1_1) {
                core_module_1 = core_module_1_1;
            },
            function (phone_list_module_1_1) {
                phone_list_module_1 = phone_list_module_1_1;
            },
            function (phone_detail_module_1_1) {
                phone_detail_module_1 = phone_detail_module_1_1;
            },
            function (upgrade_adapter_1_1) {
                upgrade_adapter_1 = upgrade_adapter_1_1;
            }],
        execute: function() {
            phonecatApp = angular.module('phonecatApp', [
                'ngAnimate',
                'ngRoute',
                core_module_1.default.name,
                phone_list_module_1.default.name,
                phone_detail_module_1.default.name
            ]).config(configure);
            configure.$inject = ['$routeProvider'];
            ;
            upgrade_adapter_1.default.addProvider(http_1.HTTP_PROVIDERS);
            upgrade_adapter_1.default.upgradeNg1Provider('$routeParams');
            upgrade_adapter_1.default.bootstrap(document.documentElement, ['phonecatApp']);
        }
    }
});
//# sourceMappingURL=app.module.js.map