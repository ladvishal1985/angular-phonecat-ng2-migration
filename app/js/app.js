System.register(['angular2/core', 'angular2/platform/browser', './core/Phones', './phone_list/PhoneList', './phone_detail/PhoneDetail', 'angular2/http', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, Phones_1, PhoneList_1, PhoneDetail_1, http_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (Phones_1_1) {
                Phones_1 = Phones_1_1;
            },
            function (PhoneList_1_1) {
                PhoneList_1 = PhoneList_1_1;
            },
            function (PhoneDetail_1_1) {
                PhoneDetail_1 = PhoneDetail_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/phones', as: 'Phones', component: PhoneList_1.default },
                        { path: '/phones/:phoneId', as: 'Phone', component: PhoneDetail_1.default },
                        { path: '/', redirectTo: ['/phones'] }
                    ]),
                    core_1.Component({
                        selector: 'pc-app',
                        template: '<router-outlet></router-outlet>',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            browser_1.bootstrap(AppComponent, [
                http_1.HTTP_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                router_1.ROUTER_DIRECTIVES,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }),
                Phones_1.Phones
            ]);
        }
    }
});
//# sourceMappingURL=app.js.map