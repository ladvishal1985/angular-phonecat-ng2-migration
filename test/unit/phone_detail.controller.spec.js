System.register(['angular2/testing', '../../app/js/phone_detail/phone_detail.module', '../../app/js/core/Phones', 'rxjs/observable/from'], function(exports_1) {
    var testing_1, Phones_1, from_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (_1) {},
            function (Phones_1_1) {
                Phones_1 = Phones_1_1;
            },
            function (from_1_1) {
                from_1 = from_1_1;
            }],
        execute: function() {
            testing_1.describe('PhoneDetailCtrl', function () {
                var scope, phones, $controller, xyzPhoneData = function () {
                    return {
                        name: 'phone xyz',
                        snippet: '',
                        images: ['image/url1.png', 'image/url2.png']
                    };
                };
                testing_1.beforeEach(angular.mock.module('phonecat.detail'));
                // Supply a hand-instantianted instance of the Phones service
                testing_1.beforeEach(angular.mock.module(function ($provide) {
                    $provide.factory('phones', function () {
                        return new Phones_1.Phones(null);
                    });
                }));
                testing_1.beforeEach(inject(function (_phones_, _$controller_, $rootScope, $routeParams) {
                    phones = _phones_;
                    $controller = _$controller_;
                    $routeParams.phoneId = 'xyz';
                    scope = $rootScope.$new();
                }));
                testing_1.it('should fetch phone detail', function () {
                    spyOn(phones, 'get').and.returnValue(from_1.FromObservable.create([xyzPhoneData()]));
                    var ctrl = $controller('PhoneDetailCtrl', { $scope: scope });
                    expect(phones.get).toHaveBeenCalledWith('xyz');
                    expect(ctrl.phone).toEqual(xyzPhoneData());
                });
            });
        }
    }
});
//# sourceMappingURL=phone_detail.controller.spec.js.map