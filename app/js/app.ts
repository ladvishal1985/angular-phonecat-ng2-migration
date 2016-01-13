
import {Component, provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';


import {Phones} from './core/Phones';
import PhoneList from './phone_list/PhoneList';
import PhoneDetail from './phone_detail/PhoneDetail';

import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, LocationStrategy, HashLocationStrategy, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';



@RouteConfig([
    { path: '/phones', as: 'Phones', component: PhoneList },
    { path: '/phones/:phoneId', as: 'Phone', component: PhoneDetail },
    { path: '/', redirectTo: ['/phones'] }
])

@Component({
    selector: 'pc-app',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})
class AppComponent {
}

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    ROUTER_DIRECTIVES,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    Phones
]);

