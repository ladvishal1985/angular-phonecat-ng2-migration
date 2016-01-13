System.register(['angular2/core', 'angular2/http', 'rxjs/observable/from', 'angular2/testing', '../../app/js/phone_detail/PhoneDetail', '../../app/js/core/Phones', 'angular2/router'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var core_1, http_1, from_1, testing_1, PhoneDetail_1, Phones_1, router_1;
    var MockPhones;
    function xyzPhoneData() {
        return {
            name: 'phone xyz',
            snippet: '',
            images: ['image/url1.png', 'image/url2.png']
        };
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (from_1_1) {
                from_1 = from_1_1;
            },
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (PhoneDetail_1_1) {
                PhoneDetail_1 = PhoneDetail_1_1;
            },
            function (Phones_1_1) {
                Phones_1 = Phones_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            MockPhones = (function (_super) {
                __extends(MockPhones, _super);
                function MockPhones() {
                    _super.apply(this, arguments);
                }
                MockPhones.prototype.get = function (id) {
                    return from_1.FromObservable.create([xyzPhoneData()]);
                };
                return MockPhones;
            })(Phones_1.Phones);
            testing_1.describe('PhoneDetail', function () {
                testing_1.beforeEachProviders(function () { return [
                    core_1.provide(Phones_1.Phones, { useClass: MockPhones }),
                    core_1.provide(router_1.RouteParams, { useValue: new router_1.RouteParams({ phoneId: 'xyz' }) }),
                    http_1.HTTP_PROVIDERS
                ]; });
                testing_1.it('should fetch phone detail', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(PhoneDetail_1.default).then(function (fixture) {
                        fixture.detectChanges();
                        var compiled = fixture.debugElement.nativeElement;
                        testing_1.expect(compiled.querySelector('.h1')).toHaveText(xyzPhoneData().name);
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=PhoneDetail.spec.js.map