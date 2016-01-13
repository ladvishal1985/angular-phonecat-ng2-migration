System.register(['angular2/core', 'angular2/http', 'rxjs/observable/from', 'angular2/testing', '../../app/js/phone_list/PhoneList', '../../app/js/core/Phones'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var core_1, http_1, from_1, testing_1, PhoneList_1, Phones_1;
    var MockPhones;
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
            function (PhoneList_1_1) {
                PhoneList_1 = PhoneList_1_1;
            },
            function (Phones_1_1) {
                Phones_1 = Phones_1_1;
            }],
        execute: function() {
            MockPhones = (function (_super) {
                __extends(MockPhones, _super);
                function MockPhones() {
                    _super.apply(this, arguments);
                }
                MockPhones.prototype.query = function () {
                    return from_1.FromObservable.create([
                        [{ name: 'Nexus S' }, { name: 'Motorola DROID' }]
                    ]);
                };
                return MockPhones;
            })(Phones_1.Phones);
            testing_1.describe('PhoneList', function () {
                testing_1.beforeEachProviders(function () { return [
                    core_1.provide(Phones_1.Phones, { useClass: MockPhones }),
                    http_1.HTTP_PROVIDERS
                ]; });
                testing_1.it('should create "phones" model with 2 phones fetched from xhr', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(PhoneList_1.default).then(function (fixture) {
                        fixture.detectChanges();
                        var compiled = fixture.debugElement.nativeElement;
                        testing_1.expect(compiled.querySelectorAll('.phone-listing').length).toBe(2);
                        testing_1.expect(compiled.querySelector('.phone-listing:nth-child(1)')).toHaveText('Nexus S');
                        testing_1.expect(compiled.querySelector('.phone-listing:nth-child(2)')).toHaveText('Motorola DROID');
                    });
                }));
                testing_1.it('should set the default value of orderProp model', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(PhoneList_1.default).then(function (fixture) {
                        fixture.detectChanges();
                        var compiled = fixture.debugElement.nativeElement;
                        testing_1.expect(compiled.querySelector('select option:last-child').selected).toBe(true);
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=PhoneList.spec.js.map